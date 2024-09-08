import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";



function TodoDetails({details, openDialog, setOpenDialog, setTodoDetails}) {
    return ( 
        <div>
            <Dialog open={openDialog} onClose={()=>setOpenDialog(false)}>
                <DialogTitle>{details?.todo}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        State: {details?.state}
                    </DialogContentText>
                    <DialogContentText>
                        Scheduled Date: {details?.day}/{details?.month}/{details?.year}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={()=> {
                        setTodoDetails(null);
                        setOpenDialog(false);
                    }}>Close</Button>
                </DialogActions>
            </Dialog>
        </div>
     );
}

export default TodoDetails;