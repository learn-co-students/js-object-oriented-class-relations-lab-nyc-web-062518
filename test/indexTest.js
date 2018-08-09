const expect = chai.expect;

describe('drivers', function() {
  describe('creating a new driver', function() {
    describe('store', function() {
      it('can store drivers', function() {
        expect(store.drivers).to.be.instanceof(Array)
      })
    })

    it('can create a Driver with a name', function() {
      let driver = new Driver("Alfie")
      expect(driver.name).to.equal("Alfie")
    })

    it('adds the driver to the store', function() {
      store.drivers = []
      let driver = new Driver("Alfie")
      expect(store.drivers[0].name).to.equal("Alfie")
    })

    it('adds a numerical id to each driver', function() {
      store.drivers = []
      let driver = new Driver("Alfie")
      expect(typeof store.drivers[0].id).to.equal("number")
    })

    it('adds a unique id to each driver', function() {
      store.drivers = []
      let driver = new Driver("Alfie")
      let otherDriver = new Driver("Freddie")
      expect(driver.id).to.not.equal(otherDriver.id)
    })
  })
})
