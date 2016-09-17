on run argv
  set theWindowIndex to item 1 of argv as integer
  set theTabIndex to item 2 of argv as integer

  tell application "Chrome"
    set index of window theWindowIndex to 1

    tell window 1
      set active tab index to theTabIndex

      tell active tab to reload
    end tell
  end tell
end run
