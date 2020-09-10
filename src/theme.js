import { createMuiTheme } from "@material-ui/core/styles";
import teal from "@material-ui/core/colors/teal";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: teal[500],
    },
    secondary: {
      main: teal[50],
    },
  },
});

export default theme;
