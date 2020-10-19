/* eslint-disable */
const fetch = require("node-fetch");

exports.handler = async function (event, context) {
    let data = {};
    let response;
    try {
        const jiraUrl = "https://jira.atlassian.com/rest/api/latest/search?jql=labels=affects-server";
        response = await fetch(jiraUrl, {
            method: 'GET',
            headers: { Accept: "application/json" }
        });
        if (!response.ok) {
            // NOT res.status >= 200 && res.status < 300
            console.log("not response.ok");
            return { statusCode: response.status, body: response.statusText };
        }
    } catch (err) {
        console.log("catch fetch");
        console.log(err); // output to netlify function log
        return {
            statusCode: 500,
            body: JSON.stringify({ msg: `Error in fetch ${err.message}` }) // Could be a custom message or object i.e. JSON.stringify(err)
        };
    }


    try {

        data = await response.json();
        return {
            statusCode: 200,
            body: JSON.stringify({ data })
        };
    } catch (err) {
        console.log("catch json() ");
        console.log(err); // output to netlify function log
        return {
            statusCode: 500,
            body: JSON.stringify({ msg: `Error in json function ${err.message}` }) // Could be a custom message or object i.e. JSON.stringify(err)
        };
    }
};