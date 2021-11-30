describe('test users api endpoints', () => {
  it('get users', () => {
    cy.request('http://localhost:8000/users').then(response => {
      expect(response.status).to.equal(200)
    })
  })
})
