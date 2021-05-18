const createResponse = (event) => {
    const success = !!((event.queryStringParameters || {}).success === 'true')
    return {
        statusCode: success ? 200 : 400,
        body: JSON.stringify({ success })
    }
}

const sync = (event, context, callback) => {
    const res = createResponse(event)
    callback(null, res)
}

const async = async (event, context) => {
    return createResponse(event)
}

module.exports = {sync, async}