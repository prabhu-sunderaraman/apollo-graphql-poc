let {RESTDataSource, HTTPCache} = require("apollo-datasource-rest");

class GroupMembersAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = "http://localhost:8080";
        this.httpCache = new HTTPCache();
    }
    async getGroupInfo(groupId) {
        const response = await this.get(`service/dev/ougroupmanagement/v1/api/OugroupMembers/Group/${groupId}`);
        return response;
    }
    async getMemberInfo(memberId) {
        const response = await this.get(`service/dev/ougroupmanagement/v1/api/OugroupMembers/Member/${memberId}`);
        return response;
    }
}

module.exports = GroupMembersAPI;