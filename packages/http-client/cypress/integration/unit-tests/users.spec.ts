import usersHttpClient from '../../../src/services/users'
import { IUser } from '../../../src/types/users'

describe('test users', () => {
  before(function () {
    cy.fixture('users/get-users.json').as('getUsersPayload')
  })

  it('get users', async function () {
    const users: IUser[] = (await usersHttpClient.getUsers()) || []

    expect(users).to.deep.equal(this.getUsersPayload)
  })
})
