const { Client } = require('@elastic/elasticsearch')
const client = new Client({ node: process.env.ELASTICSEARCH_HOST || 'http://localhost:9200' })

exports.getStudentById = async (id) => {
  const { body } = await client.get({
    index: 'students',
    id
  })
  return body
}

exports.searchStudents = async (keyword) => {
  const { body } = await client.search({
    index: 'students',
    body: {
      query: {
        query_string: {
          query: keyword
        }
      }
    }
  })
  return body.hits.hits
}

exports.searchStudentsBySubscriptionType = async (subscriptionType) => {
  const { body } = await client.search({
    index: 'students',
    body: {
      query: {
        match: {
          subscriptionType
        }
      }
    }
  })
  return body.hits.hits
}

exports.createStudent = async (student) => {
  await client.index({
    index: 'students',
    id: student.id,
    refresh: true,
    body: {
      name: student.name,
      surname: student.surname,
      email: student.email,
      password: student.password,
      illments: student.illments,
      preferredTimeslots: student.preferredTimeslots,
      subscriptionType: student.subscriptionType
    }
  })
}
