export const HeaderLogo = () => {
  return(
    <>
      <svg width="42" height="31" viewBox="0 0 42 31" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <rect width="42" height="31" fill="url(#pattern0_767_5)"/>
        <defs>
          <pattern id="pattern0_767_5" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlinkHref="#image0_767_5" transform="matrix(0.00164753 0 0 0.00223214 0.00985862 0)"/>
          </pattern>
          <image id="image0_767_5" width="595" height="448" xlinkHref="data:image/png;base64,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"/>
        </defs>
      </svg>
    </>
  )
}
