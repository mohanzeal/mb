describe('test users api endpoints', () => {
  it('get users', () => {
    cy.fixture('users/get-users.json').then(getUsersApiPayload => {
      cy.request('/users').then(response => {
        expect(response.status).to.equal(200)
        expect(response.body).to.deep.equal(getUsersApiPayload)
      })
    })
  })
})
