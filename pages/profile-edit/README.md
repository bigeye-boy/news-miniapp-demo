# Profile Edit Page

The Profile Edit page demonstrates a practical form flow with local state, image selection, file upload, request submission, and local storage.

## Files

- `profile-edit.js`: restores saved data, updates form fields, chooses an avatar, uploads the avatar, and submits profile data.
- `profile-edit.nxml`: renders avatar selection, text fields, textarea input, save button, and result feedback.
- `profile-edit.nxss`: form layout, dark mode styles, and host text scale usage.
- `profile-edit.json`: sets the page navigation title.

## Key Behaviors

- Restores the last saved profile from local storage.
- Uses `data-field` to let one input handler update multiple fields.
- Uses `nx.chooseImage` to pick a local avatar image.
- Uses `nx.uploadFile` through `services/profile` before submitting profile data.
- Uses `nx.request` through the shared request helper.
- Returns to the Profile tab after a successful save.

## Teaching Focus

Use this page to explain form state, computed property names, storage, image selection, file upload, request submission, and success or failure feedback.
