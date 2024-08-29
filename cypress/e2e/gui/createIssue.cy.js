import { faker } from '@faker-js/faker'

describe('Create Issue', () => {
    const issue = {
        title: `issue-${faker.datatype.uuid()}`,
        description: faker.random.word(3),
        project: {
            name: `project-${faker.datatype.uuid()}`,
            description: faker.random.word(5)
        }
    }

    beforeEach(() => {
        cy.login()
        cy.gui_createProject(issue.project)
    })

    it('Successfully', () =>{
        cy.gui_createProject(issue)

        cy.get('.issue.details')
        .should('contain', issue.title)
        .and('contain', issue.description)
    })
})