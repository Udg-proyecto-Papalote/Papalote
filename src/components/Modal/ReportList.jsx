import { DialogContent, DialogTitle, Modal, ModalDialog, List, ListItem, Typography, Box } from "@mui/joy";
import { reports } from "../Diagnostico/reportData";


const ReportList = ({ open, onClose, onReportClick }) => {
  return (
      <Modal
          open={open}
          onClose={onClose}
      >
          <ModalDialog>
              <DialogTitle>Diagnósticos Previos</DialogTitle>
              <DialogContent>
                  {/* Lista de reportes visual */}
                  <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', borderRadius: 'sm', boxShadow: 'md' }}>
                      
                      {reports.map((report, index) => {
              
                          const colors = ['primary', 'success', 'warning'];
                          const color = colors[index % colors.length]; // Ciclar entre los tres colores 

                          return (
                              <ListItem 
                                  key={report.id}
                                  onClick={() => onReportClick(report.id)}  // Handler para manejar el clic en el reporte
                                  sx={{ 
                                      cursor: 'pointer', 
                                      padding: 0,
                                      marginBottom: '10px', // Aumentar el espacio entre reportes
                                  }}
                              >
                                  <Box sx={{ 
                                      width: '90%', 
                                      padding: '6px', 
                                      borderRadius: '10px', 
                                      border: `1px solid`, 
                                      borderColor: color,  
                                      backgroundColor: `${color}.softBg`, 
                                      display: 'flex', 
                                      flexDirection: 'column', 
                                      gap: 1, 
                                      alignItems: 'flex-start',
                                      color: color
                                  }}>
                                      <Typography level="title-sm" sx={{ color: color }}>
                                          {report.name}
                                      </Typography>
                                      <Typography level="body-sm" sx={{ color: 'text.secondary' }}>
                                          Fecha: {report.date}
                                      </Typography>
                                  </Box>
                              </ListItem>
                          );
                      })}
                  </List>
              </DialogContent>
          </ModalDialog>
      </Modal>
  );
};

export default ReportList;