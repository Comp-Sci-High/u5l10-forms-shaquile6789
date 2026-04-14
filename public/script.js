// Create a query selector for the form

// Attach an event listener that is triggered when the form is submitted. 


// Make sure to do the following in the event listener:
// Stop the page from reloading when submitting
// Access the form data 
// Build a request body
// Console log the request body

const createForm = document.querySelector("form")

createForm.addEventListener("submit", async (e) => {
    e.preventDefault()

    const bookData = new FormData(createForm)
    const reqBody = Object.fromEntries(bookData)

    await fetch("/new/book", {
        method: "POST", 
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(reqBody)
    })

    window.location.href = '/'
})