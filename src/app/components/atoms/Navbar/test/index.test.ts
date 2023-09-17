import { render } from '@testing-library/react'
import { Navbar } from ".."

describe('App Component suit Tests', () => {
    it('Should render list items', () => {
        render(<Navbar />)
    })
})