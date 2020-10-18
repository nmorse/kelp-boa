# Kelp Boa 
### (someday it will all make sense)

## Graph Visualization for Jira issues

### Staring
 * cytoscape.js
 * Jira API
 * Ramda

### Why no CORS
jira.atlassian.com/rest/api/latest/search?jql=labels=affects-server
curl -i -X OPTIONS jira.atlassian.com/rest/api/latest/search?jql=labels=affects-server -H 'Access-Control-Request-Method: GET' -H 'Access-Control-Request-Headers: Content-Type, Accept' -H 'Origin: http://localhost:3000' 