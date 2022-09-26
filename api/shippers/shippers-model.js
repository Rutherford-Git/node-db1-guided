const db = require('../../data/db-config')

module.exports = {
  get,
  getById,
  create,
  update,
  remove,
}

async function get() {
 // const result = await db.raw('select * from shippers')
 const result = await db('shippers')
      .select('phone', 'shippername')
  return result
}

async function getById(shipperId) {
 // const result = await db.raw('select * from shippers where shipperid = 1')
 const result = await db('shippers').where('shipperid', shipperId).first()
  return result
}

async function create(shipper) {
  const [shipperId] = await db('shippers').insert(shipper)
  const result = getById(shipperId)
  return result
}

async function update(shipperId, changes) {
  const stuff = await db('shippers').update(changes).where('shipperId', shipperId)
  const result = getById(stuff)
  return result
}

async function remove(shipperId) {
  const tobedel = await getById(shipperId)
  await db('shipper').del().where('shipperid', shipperId)
  return tobedel
}
