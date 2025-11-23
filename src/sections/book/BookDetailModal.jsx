import {
  Dialog, DialogTitle, DialogContent, DialogActions,
  Typography, List, ListItem, ListItemIcon, ListItemText, Button
} from "@mui/material";
import { Book, Barcode, DocumentText, Hashtag, Calendar, BookSquare, SliderHorizontal1 } from "iconsax-react";

export default function BookDetailModal({ open, onClose, book }) {
  if (!book) return null;

  return (
    <Dialog open={open} fullWidth maxWidth="md" onClose={onClose}>
      <DialogTitle>{book.titulo}</DialogTitle>

      <DialogContent dividers>
        <Typography variant="subtitle2" color="text.secondary">
          Autor: {book.autor || "SIN DATO"}
        </Typography>

        <List sx={{ mt: 2 }}>
          <ListItem alignItems="flex-start">
            <ListItemIcon>
              <Hashtag size={18} />
            </ListItemIcon>
            <ListItemText primary={<Typography color="text.secondary">Nro Edición:{' '}{book.num_edicion ? (book.num_edicion) : (<Typography component="span" color="error">SIN DATO</Typography>)}</Typography>}/>
          </ListItem>

          <ListItem alignItems="flex-start">
            <ListItemIcon>
              <Barcode size={18} />
            </ListItemIcon>
            <ListItemText primary={<Typography color="text.secondary">ISBN:{' '}{book.isbn ? (book.isbn) : (<Typography component="span" color="error">SIN DATO</Typography>)}</Typography>}/>
          </ListItem>

          <ListItem alignItems="flex-start">
            <ListItemIcon>
              <Book size={18} />
            </ListItemIcon>
            <ListItemText primary={<Typography color="text.secondary">Notación Interna:{' '}{book.notacion_interna ? (book.notacion_interna) : (<Typography component="span" color="error">SIN DATO</Typography>)}</Typography>}/>
          </ListItem>

           <ListItem alignItems="flex-start">
            <ListItemIcon>
              <Barcode size={18} />
            </ListItemIcon>
            <ListItemText primary={<Typography color="text.secondary">Código:{' '}{book.codigo ? (book.codigo) : (<Typography component="span" color="error">SIN DATO</Typography>)}</Typography>}/>
          </ListItem>

          <ListItem alignItems="flex-start">
            <ListItemIcon>
              <SliderHorizontal1 size={18} />
            </ListItemIcon>
            <ListItemText primary={<Typography color="text.secondary">Nro Páginas:{' '}{book.num_paginas ? (book.num_paginas) : (<Typography component="span" color="error">SIN DATO</Typography>)}</Typography>}/>
          </ListItem>

          <ListItem alignItems="flex-start">
            <ListItemIcon>
              <Calendar size={18} />
            </ListItemIcon>
            <ListItemText primary={<Typography color="text.secondary">Año:{' '}{book.ano ? (book.ano) : (<Typography component="span" color="error">SIN DATO</Typography>)}</Typography>}/>
          </ListItem>

          <ListItem alignItems="flex-start">
            <ListItemIcon>
              <BookSquare size={18} />
            </ListItemIcon>
            <ListItemText primary={<Typography color="text.secondary">Ubicación en estanteria:{' '}{book.ubicacion_estanteria ? (book.ubicacion_estanteria) : (<Typography component="span" color="error">SIN DATO</Typography>)}</Typography>}/>
          </ListItem>

          <ListItem alignItems="flex-start">
            <ListItemIcon>
              <DocumentText size={18} />
            </ListItemIcon>

            <ListItemText
              primary={
                <Typography color="text.secondary" fontWeight="bold">
                  Tabla de contenido:
                </Typography>
              }
              secondary={
                book.tabla_contenido ? (
                  <Typography color="text.secondary">
                    {book.tabla_contenido}
                  </Typography>
                ) : (
                  <Typography color="text.secondary">SIN TABLA DE CONTENIDO</Typography>
                )
              }
            />
          </ListItem>
        </List>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>Cerrar</Button>
      </DialogActions>
    </Dialog>
  );
}
