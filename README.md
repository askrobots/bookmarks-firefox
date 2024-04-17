# AskRobots Extension

AskRobots Extension is a Firefox browser extension designed to allow users to easily save bookmarks to a personal API. 
Once saved, bookmarks can be managed and organized through the main AskRobots web application. The extension provides 
a simple user interface, making bookmark management effortless.

## Features
- Save the current page as a bookmark with a single click.
- Indicator to show the status of the bookmark save operation.
- Easy access to settings for configuring API token.
- Secure handling of your personal API token.

## Getting Started


This initial developer release allows you to load and test the AskRobots Extension directly from the source code:

1. **Open Firefox Developer Toolbar**:
   - Navigate to `about:debugging`.
   - Click on "This Firefox" (or enter `about:debugging#/runtime/this-firefox` in the address bar).

2. **Load the Temporary Extension**:
   - Click "Load Temporary Add-on".
   - Navigate to the cloned repository folder and select the `manifest.json` file. Clone the repo if you haven't already:
     ```bash
     git clone https://github.com/askrobots/bookmarks-firefox.git
     ```

3. **Sign Up and API Key Integration**:
   - Sign up at [askrobots.com](https://askrobots.com/signup) to obtain your API key.
   - Once signed up, navigate to your [account settings](https://askrobots.com/userauth/apikeys/) to find and copy your API key.
   - Integrate this API key into the bookmarks app through the extension's settings menu.

Now you're all set to use the extension in developer mode! Click the AskRobots Extension icon while on any webpage to save it as a bookmark to your AskRobots account. The button will indicate a successful save or an error if it occurs.

## Support

If you encounter any issues or have questions about the AskRobots Extension, please refer to the [FAQ](link-to-faq) or contact support at support@askrobots.com.

## Contributing

If you're interested in contributing to the development of AskRobots Extension, check out the [CONTRIBUTING.md](link-to-contributing) file for guidelines.

## License

AskRobots Extension is open-source software licensed under the [Mozilla Public License 2.0](link-to-license).

