import React, { useContext, useEffect, useState } from 'react'
import './ControlPanel.css'
import { Context } from '../../context'
import { Box, Button, Modal, TextField, Typography } from '@mui/material'

const ControlPanel = (props) => {
  const { newItem } = useContext(Context)
  // const [fieldError, setFieldError] = useState(false)
  const [value, changeValue] = useState({
    title: '',
    desc: '',
    price: '',
    src: '',
  })

  const [modal, openModal] = useState(false)

  const modalStyle = {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    backgroundColor: '#2c2f48',
    boxShadow: 1,
    p: 4,
  }

  const handleClose = () => openModal(false)

  const handleChange = (e) => {
    changeValue((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const [items, getItems] = useState([])

  useEffect(() => {
    getItems(props.data)
  }, [props.data])

  return (
    <div className="panel">
      <div className="panel__add">
        <div className="panel__forms">
          <TextField
            sx={{ marginBottom: '20px' }}
            label="Title (string)"
            variant="filled"
            color="warning"
            onChange={handleChange}
            autoComplete="off"
            name="title"
            value={value.title}
            error={false}
          />
          <TextField
            sx={{ marginBottom: '20px' }}
            label="Description (string)"
            variant="filled"
            color="warning"
            onChange={handleChange}
            autoComplete="off"
            name="desc"
            value={value.desc}
            error={false}
          />
          <TextField
            sx={{ marginBottom: '20px' }}
            label="Price (num)"
            variant="filled"
            color="warning"
            onChange={handleChange}
            autoComplete="off"
            name="price"
            value={value.price}
            error={false}
          />
          <TextField
            sx={{ marginBottom: '20px' }}
            label="Image Source (url)"
            variant="filled"
            color="warning"
            onChange={handleChange}
            autoComplete="off"
            name="src"
            value={value.src}
            error={false}
          />
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#6791f3',
              fontFamily: 'Open Sans, sans-serif',
              fontWeight: 700,
              margin: '10px',
            }}
            onClick={() => {
              newItem({
                id: props.data.length,
                title: value.title,
                description: value.desc,
                price: Number(value.price),
                src: value.src,
              })
              changeValue({
                title: '',
                desc: '',
                price: '',
                src: '',
              })
            }}
          >
            Add Item
          </Button>
        </div>
      </div>
      <div className="panel__remove">
        <ol>
          {items.map((item) => (
            <li key={item.id}>
              {item.title}{' '}
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#6791f3',
                  fontFamily: 'Open Sans, sans-serif',
                  fontWeight: 700,
                  margin: '0 10px',
                }}
                size="small"
                onClick={() => openModal(true)}
              >
                X
              </Button>
              <Modal
                BackdropProps={{ invisible: true }}
                open={modal}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={modalStyle}>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    Are you sure you want to delete item?
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <Button
                      color="error"
                      variant="contained"
                      size="large"
                      onClick={() => {
                        props.removeItem(item.id)
                        openModal(false)
                      }}
                      sx={{
                        fontFamily: 'Open Sans, sans-serif',
                        fontWeight: 700,
                        margin: '0 10px',
                      }}
                    >
                      Delete
                    </Button>
                  </Typography>
                </Box>
              </Modal>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}

export default ControlPanel
