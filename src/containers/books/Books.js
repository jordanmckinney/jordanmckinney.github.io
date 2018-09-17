import React from 'react';
import Book from '../../components/book/Book';

import Diaspora from '../../documents/books/diaspora.md';
import Elephant from '../../documents/books/elephant.md';
import HowToFail from '../../documents/books/howtofail.md';
import RationalOptimist from '../../documents/books/rationaloptimist.md';
import Tribe from '../../documents/books/tribe.md';
import LessonsOfHistory from '../../documents/books/lessonsofhistory.md';
import WiganPier from '../../documents/books/wiganpier.md';
import Siddhartha from '../../documents/books/siddhartha.md';
import Sapiens from '../../documents/books/sapiens.md';
import ZeroToOne from '../../documents/books/zerotoone.md';
import Superintelligence from '../../documents/books/superintelligence.md';
import SurelyYoureJoking from '../../documents/books/surelyyourejoking.md';
import DoorsOfPerception from '../../documents/books/doorsofperception.md';
import HowToWinFriends from '../../documents/books/howtowinfriends.md';
import GEB from '../../documents/books/geb.md';
import Laws from '../../documents/books/laws.md';
import Singularity from '../../documents/books/singularity.md';
import './Books.scss';

const Books = () => (
  <div className="books-container">
    <h3 id="year">Impactful Books I've Read</h3>
    <hr></hr>
    <Book source={Superintelligence} />
    <Book source={Siddhartha} />
    <Book source={Diaspora} />
    <Book source={SurelyYoureJoking} />
    <Book source={LessonsOfHistory} />
    <Book source={ZeroToOne} />
    <Book source={Sapiens} />
    <Book source={RationalOptimist} />
    <Book source={Elephant} />
    <Book source={DoorsOfPerception} />
    <Book source={HowToFail} />
    <Book source={Tribe} />
    <Book source={HowToWinFriends} />
    <Book source={WiganPier} />
  </div>
)

export default Books;
