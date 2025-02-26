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

- Add tests for the app. I would do this by adding components tests to check for the following:
    - Check that the correct components are rendered.
    - Check that the correct props are passed to the components.
    - Check that the correct styles are applied to the components.
    - Check that the correct events are passed to the components.
    - Check that the correct data is passed to the components.
    - Check that the correct styles are applied to the components.
    - Check that the correct events are passed to the components.

## Key Features

- I created a helper function to check if the funnel background is dark or light so any colours not passed by the funnel JSON file will be automatically have the correct contrast. [Link](https://github.com/devanpellow/perspective/blob/main/app/utils/index.ts#L16) to helper function.
- I created a `BlockWrapper` component that wraps each block so that in the future if we wanted to pass props to each block like padding, margin, border, background color, etc it would be easier to do so. [Link](https://github.com/devanpellow/perspective/blob/main/app/components/blocks/BlockWrapper.tsx) to `BlockWrapper` component.
- I created a `DeviceSizeSelector` component that allows you to select the device size you want to preview the funnel on. [Link](https://github.com/devanpellow/perspective/blob/main/app/components/mobile-preview/DeviceSizeSelector.tsx) to `DeviceSizeSelector` component.
