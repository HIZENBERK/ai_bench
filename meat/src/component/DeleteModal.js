import React from 'react';
import { Dialog, Button } from '@mui/material';
import '../css/Pagination.css';

const DeleteModal = ({ open, onClose, onConfirm }) => {
    return (
        <Dialog open={open} onClose={onClose}>
            <div className="modal-overlay">
                <div className="modal-content">
                    <h4>삭제하시겠습니까?</h4>
                    <div className="findBtn">
                        <Button className="yesbtn" variant="outlined" color="secondary" onClick={onConfirm}>
                            예
                        </Button>
                        <Button className="yesbtn" variant="outlined" color="primary" onClick={onClose}>
                            아니오
                        </Button>
                    </div>
                </div>
            </div>
        </Dialog>
    );
};

export default DeleteModal;
