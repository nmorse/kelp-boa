
const transform = (obj) => {
//console.log('*** transform input ***', obj);
    return R.map(ele => ({data: ele, group: "nodes"}), R.prop('issues', obj));
// return [
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
//     ];
}//R.identity(obj);