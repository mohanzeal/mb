import usersHttpClient from '../../../src/services/users'
import { IUser } from '../../../src/types/users'

describe('test users', () => {
  before(function () {
    cy.fixture('users/get-users.json').as('allUsersPayload')
  })

  it('get all users', async function () {
    const users: IUser[] = (await usersHttpClient.getAllUsers()) || []

    expect(users).to.deep.equal(this.allUsersPayload)
  })
})
