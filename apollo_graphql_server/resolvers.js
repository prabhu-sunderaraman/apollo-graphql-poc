let GroupMembersAPI = require("./group_members_api")
let db = {
    ouGroupMembers: [
        {
            "groupId": 19,
            "name": "Area_01",
            "description": "Area_01 Hospitals",
            "priority": "100",
            "members": [
                {
                    "id": "3a9ba152-4f28-413f-b6c7-2197efe7d7b4",
                    "name": "VCA Marina Bay Cities Animal Hospital",
                    "hospitalID": "153",
                    "hospitalID_Number": 153,
                    "bannerUnitID": "800001",
                    "enterpriseID": "900001",
                    "ouType": {
                        "id": "fa794190-4412-4569-a650-ebd400f555a8",
                        "name": "Hospital"
                    },

                    "address": [
                        {
                            "id": "558",
                            "addressLine1": "8807 Melrose Ave",
                            "addressLine2": "",
                            "city": "California",
                            "state": {
                                "id": "62527c8a-107f-4fae-96eb-0e4a776a506e",
                                "name": "CA"
                            },
                            "country": {
                                "id": "6fa3971b-59fd-4537-9547-b0530980b56e",
                                "name": "USA"
                            },
                            "zipCode": "90069"
                        }
                    ],
                    "contacts": [
                        {
                            "id": "558",
                            "email": "AnimalHospital@VCA.com",
                            "phoneNumber": "1-310-306-8707",
                            "fax": "1-310-827-5182",
                            "website": "https://vcahospitals.com"
                        }
                    ],
                    "currency": {
                        "id": "d313908f-b208-46b6-b91c-0ad1ba99ebf1",
                        "name": "USD",
                        "symbol": "$"
                    },
                    "timeZone": {
                        "name": "America/Los_Angeles"
                    }
                }
            ]
        },

        {
            "groupId": 20,
            "name": "Area_02",
            "description": "Area_02 Hospitals",
            "priority": "101",
            "members": [
                {
                    "id": "13a9ba152-4f28-413f-b6c7-2197efe7d7b4",
                    "name": "VCA Marina Bay Cities Animal Hospital",
                    "hospitalID": "1534",
                    "hospitalID_Number": 1534,
                    "bannerUnitID": "800001",
                    "enterpriseID": "900001",
                    "ouType": {
                        "id": "1fa794190-4412-4569-a650-ebd400f555a8",
                        "name": "Hospital"
                    },

                    "address": [
                        {
                            "id": "1558",
                            "addressLine1": "8807 Melrose Ave",
                            "addressLine2": "",
                            "city": "California",
                            "state": {
                                "id": "162527c8a-107f-4fae-96eb-0e4a776a506e",
                                "name": "MI"
                            },
                            "country": {
                                "id": "6fa3971b-59fd-4537-9547-b0530980b56e",
                                "name": "USA"
                            },
                            "zipCode": "90069"
                        }
                    ],
                    "contacts": [
                        {
                            "id": "1558",
                            "email": "AnimalHospital@VCA.com",
                            "phoneNumber": "1-310-306-8707",
                            "fax": "1-310-827-5182",
                            "website": "https://vcahospitals.com"
                        }
                    ],
                    "currency": {
                        "id": "d313908f-b208-46b6-b91c-0ad1ba99ebf1",
                        "name": "USD",
                        "symbol": "$"
                    },
                    "timeZone": {
                        "name": "America/Los_Angeles"
                    }
                }
            ]
        }

    ]
};


let resolvers = {
	Query: {
		group: async(_, { groupId }, { dataSources }) => {
			let rs = await dataSources.membersApi.getGroupInfo(groupId);
			return JSON.parse(rs);
		},
        member: async(_, { memberId }, { dataSources }) => {
			let rs = await dataSources.membersApi.getMemberInfo(memberId);
			return JSON.parse(rs);
		}
	}
}

module.exports = resolvers;
