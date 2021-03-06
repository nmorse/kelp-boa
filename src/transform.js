const notNull = n => (n !== null && n !== undefined);

const transformIssuesToNodes = (obj) => {
    //console.log('*** transform input ***', obj);
    const nodes = R.map(ele => {
        const data = { ...ele, orig_id: ele.id, id: ele.key };
        return { data, group: "nodes" };
    }, R.prop('issues', obj));
    const node_ids = R.map(n => n.data.id, nodes);
    
    //data.fields.issuelinks[0].inwardIssue.key
    const getTarget = (node) => R.path(['data', 'fields', 'issuelinks', 0, 'inwardIssue', 'key'], node.data.fields.issuelinks? node: null);
    const edges = R.map(node => {
        const target = getTarget(node);
        return target && R.includes(target, node_ids) ? {data: {source: node.data.key, target}, group: "edges"}: null;
    }, nodes);

    //data.fields.issuelinks[0].outwardIssue.key
    const getTarget2 = (node) => R.path(['data', 'fields', 'issuelinks', 0, 'outwardIssue', 'key'], node.data.fields.issuelinks? node: null);
    const edges2 = R.map(node => {
        const target = getTarget2(node);
        return target && R.includes(target, node_ids) ? {data: {source: node.data.key, target}, group: "edges"}: null;
    }, nodes);
    return R.concat(nodes, R.filter(notNull, edges), R.filter(notNull, edges2));
};

const getLabelsAsNodes = (obj) => {
    //console.log('*** transform input ***', obj);
    const labels = R.uniq(R.flatten(R.map(ele => R.prop('labels', ele), R.prop('issues', obj))));
    return R.map(ele => ({data: ele, group: "nodes"}), labels);
};

//   [
//         {
//             "data": {
//                 "id": "glyph9",
//                 "sbgnbbox": {
//                     "x": 145.639173965406,
//                     "y": 60.3619416544145,
//                     "w": "120.0",
//                     "h": "60.0"
//                 },
//                 "sbgnclass": "macromolecule",
//                 "sbgnlabel": "hexokinase",
//                 "sbgnstatesandinfos": [],
//                 "ports": []
//             },
//             "position": {
//                 "x": 111.6287997422921,
//                 "y": 104.3343801499798
//             },
//             "group": "nodes",
//             "removed": false,
//             "selected": false,
//             "selectable": true,
//             "locked": false,
//             "grabbable": true,
//             "classes": ""
//         },
//         {
//             "data": {
//                 "id": "glyph0",
//                 "sbgnbbox": {
//                     "x": 135.3490293961959,
//                     "y": 51.9529901384763,
//                     "w": "60.0",
//                     "h": "60.0"
//                 },
//                 "sbgnclass": "simple chemical",
//                 "sbgnlabel": "glucose",
//                 "sbgnstatesandinfos": [],
//                 "ports": []
//             },
//             "position": {
//                 "x": 104.5127267544701,
//                 "y": 96.307584024581
//             },
//             "group": "nodes",
//             "removed": false,
//             "selected": false,
//             "selectable": true,
//             "locked": false,
//             "grabbable": true,
//             "classes": ""
//         },
//         {
//             "data": {
//                 "id": "e65",
//                 "sbgnclass": "production",
//                 "sbgncardinality": 0,
//                 "source": "glyph0",
//                 "target": "glyph9",
//                 "portsource": "glyph0",
//                 "porttarget": "glyph9"
//             },
//             "position": {},
//             "group": "edges",
//             "removed": false,
//             "selected": false,
//             "selectable": true,
//             "locked": false,
//             "grabbable": true,
//             "classes": ""
//         }
//    ]