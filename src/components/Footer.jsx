import React from 'react'

const Footer = () => {
  const lineBreaks = [...Array(10)].map(() => <br />);

  return (
    <div>
        {lineBreaks}
        <div class="text-center hover:text-black duration-500">
            <a id="vpkwebsite" href="https://github.com/pkchoudary/My-Portfolio">
                2025 vpkc ©
                </a>
        </div>
    </div>
  )
}

export default Footer;
