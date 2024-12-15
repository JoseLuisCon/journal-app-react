import { Fab } from "@mui/material";
import { NoteView, NothingSelectedView } from "../../views";
import { JournalLayout } from "../layout/JournalLayout";
import { AddOutlined } from "@mui/icons-material";

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <NothingSelectedView /> */}
      <NoteView />

      <Fab
        sx={{
          position: "absolute",
          bottom: 80,
          right: 80,
          ":hover": { opacity: 0.9 },
        }}
        aria-label="Add"
        color={"error"}
      >
        <AddOutlined sx={{ fontSize: 40 }} />
      </Fab>
    </JournalLayout>
  );
};
