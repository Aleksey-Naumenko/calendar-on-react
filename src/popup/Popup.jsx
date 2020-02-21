import React from 'react';
import './popup.scss';

const Popup = ({ isShown, onHide }) => {
    if (!isShown) return null;
    return (
        <div className="popup-modal">
            <form className="popup">
                <div className="popup__header">
                    <i className="fas fa-times popup__header_close-btn" onClick={() => onHide()}></i>
                    <input className="popup__header_title-input" type="text" name="title" placeholder="Add Title" />
                </div>
                <div className="popup__color-scheme">
                    <label className="popup__color-scheme_label">
                        <span className="popup__color-scheme_label-text">Choose a color</span>
                        <input className="popup__color-scheme_chooser" type="color" name="colorChooser" value="#4b28d1" />
                    </label>
                </div>
                <div className="popup__info">
                    <div className="popup__info_icon"><i className="far fa-clock"></i></div>
                    <input className="popup__info_date-from" type="date" name="dateFrom" />
                    <div className="popup__info_duration">
                        <input className="popup__info_duration-from" name="timeFrom" type="time" />
                        <div className="popup__info_duration-line"> - </div>
                        <input className="popup__info_duration-to" name="timeTo" type="time" />
                    </div>
                    <input className="popup__info_date-to" type="date" name="dateTo" />
                </div>

                <div className="popup__description">
                    <div className="popup__description_icon"><i className="fas fa-align-left"></i></div>
                    <input className="popup__description_text" type="text" name="description" placeholder="Add Description" />
                    <input className="popup__id" type="number" name="id" value="0" hidden={true} />
                </div>

                <div className="popup__action">
                    <span className="popup__action_delete" data-id="913" style={{ visibility: "visible" }}><i className="fas fa-trash-alt"></i></span>
                    <input className="popup__action_save" type="submit" value="Save" />
                </div>
            </form>
        </div>
    );
};

export default Popup;