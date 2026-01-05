"use client"

import React, { useState } from 'react'
import { FaPiedPiperHat } from 'react-icons/fa'
import styles from './InteractiveBook.module.css'

const pages = [
  { content: <h1>Mrs. Dalloway</h1> },
  { content: <p>Mrs. Dalloway said she would buy the flowers herself.</p> },
  { content: <p>For Lucy had her work cut out for her. The doors would be taken off their hinges;</p> },
  { content: <p>Rumpelmayer's men were coming. And then, thought Clarissa Dalloway, what a morning!</p> },
  { content: <p>Fresh as if issued to children on a beach. What a lark! What a plunge!</p> },
  { content: <p>For so it had always seemed to her, when, with a little squeak of the hinges,</p> },
]

export default function InteractiveBook() {
  const [currentPage, setCurrentPage] = useState(0)

  const flipPage = (pageIndex: number) => {
    if (pageIndex > currentPage && pageIndex <= pages.length) {
      setCurrentPage(pageIndex)
    } else if (pageIndex < currentPage && pageIndex >= 0) {
      setCurrentPage(pageIndex - 1)
    }
  }

  return (
    <div className={styles.bookContainer}>
      <div className={styles.instruction}>Click to flip the page</div>
      <div className={styles.book}>
        {pages.map((page, index) => (
          <div
            key={index}
            className={`${styles.page} ${index < currentPage ? styles.flipped : ''} ${
              index === 0 ? styles.coverFront : ''
            }`}
            onClick={() => flipPage(index + 1)}
          >
            <div className={styles.front}>
              {index === 0 && (
                <>
                  <h1>Mrs. Dalloway</h1>
                  <div className={styles.hat}>
                    <FaPiedPiperHat />
                  </div>
                  <h2>Virginia Woolf</h2>
                </>
              )}
              {index > 0 && <div className={styles.content}>{page.content}</div>}
            </div>
            <div className={styles.back}>
              {index < pages.length - 1 && (
                <div className={styles.content}>{pages[index + 1].content}</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

