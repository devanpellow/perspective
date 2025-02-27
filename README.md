# Funnel Preview App

This is a simple app that allows you to preview your funnel by uploading a JSON file.
You can find the test JSON file in the [data](data/funnel-data.json) folder.

You can find the live app [here](https://perspective-azure.vercel.app/).

## Running the app locally

Clone the repository:

```bash
git clone https://github.com/devanpellow/perspective.git
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

# Future Considerations

## Testing

- Add tests for the app. I would implement both Jest and React Testing Library. I would choose this approach because the test run very quickly and they are able to cover both the UI and the logic of the app. It's also possible to set up Cypress tests to cover the app, this would allow us to test the app as a user would use it. However, I would only do this if the app is getting more complex and we need to test the user experience.
- I would test the following scenarios in the app:
    - File Upload:
        - Renders upload component when no file is uploaded
        - Renders preview component when file is uploaded
        - Renders error message when invalid file type is uploaded
        - Renders error when JSON cannot be parsed
    - Preview:
        - Renders correct blocks
        - Renders correct styles
        - Renders correct data
    - Page Navigation:
        - Renders correct page when navigating to a different page
        - Disables back navigation when at the first page
        - Disables forward navigation when at the last page
    - Device Size:
        - Renders correct device size
        - Renders correct styles for the selected device size
    - Blocks:
        - Renders correct block type
        - Renders correct block data
        - Renders correct block styles
        
## Storybook

- I would add storybook to the project. This would allow us to create variants of each component and see how they look in different states by passing in mocked data, without having to upload a JSON file.

## Validation

- I would add a more robust validation function to check if the funnel JSON file is valid. Using a library like `zod`. For now I've just created a helper function that parses the JSON file.

## File Optimization

- In a future iteration I would extract the Mobile Preview Wrapper into a separate component so that it becomes possible to show different device shapes like iPhone, Samsung, or desktop.

# Key Features

- I created a helper function to check if the funnel background is dark or light so any colours not passed by the funnel JSON file will be automatically have the correct contrast. [Link](https://github.com/devanpellow/perspective/blob/main/app/utils/index.ts#L16) to helper function.
- I created a `BlockWrapper` component that wraps each block so that in the future if we wanted to pass props to each block like padding, margin, border, background color, etc it would be easier to do so. [Link](https://github.com/devanpellow/perspective/blob/main/app/components/blocks/BlockWrapper.tsx) to `BlockWrapper` component.
- I created a `DeviceSizeSelector` component that allows you to select the device size you want to preview the funnel on. [Link](https://github.com/devanpellow/perspective/blob/main/app/components/mobile-preview/DeviceSizeSelector.tsx) to `DeviceSizeSelector` component.
- I created a JSON object check function to check if the funnel JSON file matches the expected format. [Link](https://github.com/devanpellow/perspective/blob/main/app/utils/index.ts#L24) to helper function.
