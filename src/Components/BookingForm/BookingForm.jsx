import React from 'react';
import Styles from './BookingFrom.module.css';
import { faCalendarDays } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Flex, Input, Select, Stack } from '@chakra-ui/react';

export default function BookingForm() {
    const handleDateInputFocus = (e) => {
        // Programatically open the date picker when the input is focused
        e.target.type = 'date';
    };

    return (
        <div className={Styles.MainContainer}>
            <h1 className={Styles.title1}>ROOMS & SUITES</h1>
            <h2 className={Styles.title2}>Hotel Booking Form</h2>
            <div className={Styles.Line}></div>
            <div className={Styles.Form}>
                <form>
                    <div className={Styles.MainInput}>
                        <div className={Styles.DateInputContainer}>
                            <Input className={Styles.DateInput}
                                placeholder="Check in"
                                size="md"
                                type="date"
                            />
                            <Input className={Styles.DateInput}
                                placeholder="Check in"
                                size="md"
                                type="date"
                            />
                        </div>
                        <div>
                            <Flex className={Styles.SelectOptionsContainer} gap={3}>
                                <Select className={Styles.SelectOptions}>
                                    <option value="12">Children</option>
                                    <option value="12">1</option>
                                    <option value="12">2</option>
                                    <option value="12">3</option>
                                </Select>
                                <Select className={Styles.SelectOptions}>
                                    <option value="12">Adult</option>
                                    <option value="12">1</option>
                                    <option value="12">2</option>
                                    <option value="12">3</option>
                                </Select>
                            </Flex>
                        </div>
                    </div>
                    <button className={Styles.Button} type='Submit'>Check Availability</button>
                </form>
            </div>
        </div>
    );
}
