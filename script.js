const tagsEl = document.getElementById('tags')
const textarea = document.getElementById('textarea')

// Focus on the textarea when on the page
textarea.focus()

textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value)
})

// To test what happens
// function createTags(input) {
//     console.log(input)
// }

function createTags(input) {
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())
    // To test the output
    // console.log(tags)

    // Clear the tags, so they don't stack
    tagsEl.innerHTML = ''

    tags.forEach(tag => {
        const tagEl = document.createElement('span')
        tagEl.classList.add('tag')
        tagEl.innerText = tag
        tagsEl.appendChild(tagEl)
    })
}