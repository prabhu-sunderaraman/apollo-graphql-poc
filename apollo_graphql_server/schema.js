//prisma
let schema = `

	type OUGroup {
		groupId: ID!,
		name: String,
        description: String,
        priority: String,
        members: [OUGroupMember]
	}

    type OUGroupMember {
        id: ID!,
        name: String,
        hospitalId: String,
        hospitalIDNumber: Int,
        bannerUnitId: String
        enterpriseId: String,
        ouType: OUType,
        address: [Address],
        contacts: [Contact],
        currency: Currency,
        timeZone: TimeZone
    }

    type OUType {
        id: ID!,
        name: String
    }

    type Address {
        id: ID!,
        addressLine1: String,
        addressLine2: String,
        city: String,
        state: State,
        country: Country,
        zipcode: String
    }

    type State {
        id: ID!,
        name: String
    }

    type Country {
        id: ID!,
        name: String
    }

    type Contact {
        id: ID!,
        email: String,
        phoneNumber: String,
        fax: String,
        url: String
    }

    type Currency {
        id: ID!,
        name: String,
        symbol: String
    }

    type TimeZone {
        name: String
    }
    
    type Query {
        group(groupId: Int): OUGroup,
        member(memberId: String): OUGroupMember,
        groupByPatient(patientId: String): OUGroupMember
    }
`
module.exports = schema;