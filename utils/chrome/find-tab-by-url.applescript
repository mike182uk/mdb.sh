on run argv
  set theURL to item 1 of argv

  tell application "Chrome"
    set theWindowIndex to 0

    repeat with theWindow in every window
      set theTabIndex to 0
      set theWindowIndex to theWindowIndex + 1

      repeat with theTab in every tab of theWindow
        set theTabIndex to theTabIndex + 1

        if theTab's URL is theURL then
          return "{\"window\": " & theWindowIndex & ", \"tab\": " & theTabIndex & "}"
        end if
      end repeat
    end repeat
  end tell
end run
