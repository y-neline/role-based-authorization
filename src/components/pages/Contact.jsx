import React from "react";
import Navbar from "../Navbar";
import CommonTopbar from "../CommonTopbar";
import { ColorModeContext, useMode, tokens } from "../AdminPage/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Box, IconButton, useTheme } from "@mui/material";

const Contact = () => {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <CommonTopbar />
        <Box style={{ backgroundColor: "#1F2A40", padding: "20px", margin: "10px auto", maxWidth: "800px" }}>
          <h1 style={{ textAlign: "center" }}>Contacts</h1>
          <p>
          Lorem sipsum edolor sit amet consectetur adipisicing elit. Ducimus corporis, cum officiis aliquam, perferendis libero nam necessitatibus nulla eius iure sit ut autem eveniet magnam perspiciatis soluta quia repellendusLorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus corporis, cum officiis aliquam, perferendis libero nam necessitatibus nulla eius iure sit ut autem eveniet magnam perspiciatis soluta quia repellendusLorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus corporis, cum officiis aliquam, perferendis libero nam necessitatibus nulla eius iure sit ut autem eveniet magnam perspiciatis soluta quia repellendus
          </p>
        </Box>

        <Box style={{ backgroundColor: "#1F2A40", padding: "20px", margin: "10px auto", maxWidth: "800px" }}>
          
          <p>
            TLorem sipsum edolor sit amet consectetur adipisicing elit. Ducimus corporis, cum officiis aliquam, perferendis libero nam necessitatibus nulla eius iure sit ut autem eveniet magnam perspiciatis soluta quia repellendusLorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus corporis, cum officiis aliquam, perferendis libero nam necessitatibus nulla eius iure sit ut autem eveniet magnam perspiciatis soluta quia repellendusLorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus corporis, cum officiis aliquam, perferendis libero nam necessitatibus nulla eius iure sit ut autem eveniet magnam perspiciatis soluta quia repellendus
          </p>
        </Box>

        <Box style={{ backgroundColor: "#1F2A40", padding: "20px", margin: "10px auto", maxWidth: "800px" }}>
          
          <p>
          Lorem sipsum edolor sit amet consectetur adipisicing elit. Ducimus corporis, cum officiis aliquam, perferendis libero nam necessitatibus nulla eius iure sit ut autem eveniet magnam perspiciatis soluta quia repellendusLorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus corporis, cum officiis aliquam, perferendis libero nam necessitatibus nulla eius iure sit ut autem eveniet magnam perspiciatis soluta quia repellendusLorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus corporis, cum officiis aliquam, perferendis libero nam necessitatibus nulla eius iure sit ut autem eveniet magnam perspiciatis soluta quia repellendus
          </p>
          
        </Box>

        <Box style={{ backgroundColor: "#1F2A40", padding: "20px", margin: "10px auto", maxWidth: "800px" }}>
          
          <p>
          Lorem sipsum edolor sit amet consectetur adipisicing elit. Ducimus corporis, cum officiis aliquam, perferendis libero nam necessitatibus nulla eius iure sit ut autem eveniet magnam perspiciatis soluta quia repellendusLorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus corporis, cum officiis aliquam, perferendis libero nam necessitatibus nulla eius iure sit ut autem eveniet magnam perspiciatis soluta quia repellendusLorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus corporis, cum officiis aliquam, perferendis libero nam necessitatibus nulla eius iure sit ut autem eveniet magnam perspiciatis soluta quia repellendus
          </p>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default Contact;
