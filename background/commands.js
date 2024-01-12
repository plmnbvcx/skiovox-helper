    case "SWITCH_WINDOWS":
      chrome.windows.getAll((windows) => {
        if (windows.length > 1) {
          chrome.windows.update(recentWindow.id, { focused: false });
        }
      })
      break;
  }
}

chrome.commands.onCommand.addListener(onCommand);
