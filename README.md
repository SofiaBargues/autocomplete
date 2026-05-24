# Autocomplete

Build an autocomplete component using React.js.

## Objective

Create an autocomplete input that works like a payment form where users can enter their UPI ID.

The component should suggest possible UPI handles based on the user input and allow users to quickly complete their selection.

## Functional Requirements

- Render an input where the user can type a UPI ID or UPI handle.
- Show a list of best-matched UPI handles based on the current user input.
- The suggestions should update as the user types.
- Display an inline suggestion for the best matching UPI handle.
- The user should be able to select a suggestion by clicking on a list item.
- The user should be able to select or complete a suggestion using the keyboard.
- If an inline suggestion is visible and the user presses the right arrow key, the suggestion should be auto-filled.
- Handle edge cases such as:
  - Empty input.
  - No matching suggestions.
  - Case-sensitive or case-insensitive matches.
  - Closing the suggestions list after a selection.
- Add any extra functionality that improves the user experience.

## Example Data

```js
const UPI_HANDLES = [
  "okaxis",
  "BARODAMPAY",
  "rbl",
  "upi",
  "allbank",
];
