# JavaScript

## neovim editor

```lua
-- Code Runner
vim.api.nvim_create_user_command("Run", function()
  local ft = vim.bo.filetype

  if ft == "javascript" then
    vim.cmd("!node %:.")
  else
    print("Not support this filetype yet.")
  end
end, {})
```
