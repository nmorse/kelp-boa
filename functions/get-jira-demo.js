/* eslint-disable */
const fetch = require("node-fetch");

exports.handler = async function (event, context) {
    let data = {};
    let response;
    try {
        const jiraUrl = "jira.atlassian.com/rest/api/latest/search?jql=labels=affects-server";
        response = await fetch(jiraUrl, {
            headers: { Accept: "application/json" }
        });
        if (!response.ok) {
            // NOT res.status >= 200 && res.status < 300
            return { statusCode: response.status, body: response.statusText };
        }
    } catch (err) {
        console.log(err); // output to netlify function log
        return {
            statusText: "Error in fetch",
            statusCode: 500,
            body: JSON.stringify({ msg: err.message }) // Could be a custom message or object i.e. JSON.stringify(err)
        };
    }


    try {

        const data = await response.json();
        return {
            statusCode: 200,
            body: JSON.stringify({ data })
        };
    } catch (err) {
        console.log(err); // output to netlify function log
        return {
            statusText: "Error in json function",
            statusCode: 500,
            body: JSON.stringify({ msg: err.message }) // Could be a custom message or object i.e. JSON.stringify(err)
        };
    }
};