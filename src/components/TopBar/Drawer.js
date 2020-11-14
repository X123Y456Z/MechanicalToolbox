import React from "react";
import { Divider, List, ListItem, ListItemText } from "@material-ui/core";

import { ListItemIcon, InboxIcon, MailIcon } from "@material-ui/icons";

export const Drawer = ({ open }) => {
  return (
    <Drawer
      // className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={open}
      // classes={{
      //   paper: classes.drawerPaper
      // }}
    >
      {/* <div> */}
      {/* <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton> */}
      {/* </div> */}
      <Divider />
      {/* <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}
    </Drawer>
  );
};
