import React, { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

//importing next js link component
import Link from "next/link";

//icons
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import PeopleIcon from "@mui/icons-material/People";
import MailIcon from "@mui/icons-material/Mail";
import ListItemIcon from "@mui/material/ListItemIcon";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ViewQuiltIcon from "@mui/icons-material/ViewQuilt";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SecurityIcon from "@mui/icons-material/Security";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import EditIcon from "@mui/icons-material/Edit";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";

// Dashboard, charts, leads, products, forms, text-editor(rich-text-editor),settings,Profile,notifications, Tablelist, userprofile

//sidebar links and data
const DataOne = [
  {
    id: "1",
    title: "Dashboard",
    slug: "dashboard",
    icon: <SpaceDashboardIcon />,
  },
  {
    id: "2",
    title: "Charts",
    slug: "charts",
    icon: <InsertChartIcon />,
  },
  {
    id: "3",
    title: "Products",
    slug: "products",
    icon: <ProductionQuantityLimitsIcon />,
  },
  {
    id: "4",
    title: "Notifications",
    slug: "notifications",
    icon: <CircleNotificationsIcon />,
  },
];

const DataTwo = [
  {
    id: "4",
    title: "Editor",
    slug: "editor",
    icon: <EditIcon />,
  },
  {
    id: "1",
    title: "Leads",
    slug: "leads",
    icon: <PeopleIcon />,
  },
  {
    id: "2",
    title: "Forms",
    slug: "forms",
    icon: <MailIcon />,
  },
  {
    id: "3",
    title: "Profile",
    slug: "profile",
    icon: <AccountCircleIcon />,
  },
];

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

function SiderItem(itemObj) {
  const [open, setOpen] = useState(true);
  return (
    <ListItem key={itemObj.id} disablePadding sx={{ display: "block" }}>
      <Link
        href={`/${itemObj.slug}`}
        style={{ textDecoration: "none", color: "black" }}
      >
        {" "}
        <ListItemButton
          sx={{
            minHeight: 48,
            justifyContent: open ? "initial" : "center",
            px: 2.5,
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: open ? 3 : "auto",
              justifyContent: "center",
            }}
          >
            {itemObj.icon}
          </ListItemIcon>
          <ListItemText
            primary={itemObj.title}
            sx={{ opacity: open ? 1 : 0 }}
          />
        </ListItemButton>
      </Link>
    </ListItem>
  );
}

export default function MyApp({ Component, pageProps }) {
  const theme = useTheme();
  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>{DataOne.map(SiderItem)}</List>
        <Divider />
        <List>{DataTwo.map(SiderItem)}</List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Component {...pageProps} />
      </Box>
    </Box>
  );
}
