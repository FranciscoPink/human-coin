# Human Coin

https://human-coin.netlify.app

## Project Description

Human Coin is a React application that introduces the innovative concepts of cryptocurrencies to manual labor. By tapping or clicking on the coin found in your wallet, you chip closer to finding a coin. Every coin found is added to your wallet. Save your wallet ID to access your wallet later.

## Wireframes



![imageAlt](https://lh3.googleusercontent.com/u7iRZ1IG6pbxaS0qhqQwXEvBKDLCgtHclGny4wp4MChjg1V3bxEKl3CFX3GVyoKXJtvZ1P8eKqhUSkz4ITzaIuGCj53LrVtj3z-_NSekEzkzawdPw9DFLgs_OfxfPSnTwglGkY8O-GNcT4mmEbfhur98Lr9tilxmV1aTmnpr3TMfkuprpXBsdsS7oTDvZ0eorfgt760Dj4wDn2eJVjXeIn2u3HIVZN8oKF-ks8yMzYGIY1he9Av8mc4wsxylCRTnP7v7tqy-RtD6cwC98VUH6M4WiaOImpRdxSBQak9Y2dt-whAiJwpTBPN7xz_-fbauRqkFuwxDKfyOvLDLX4vCwQHCmiDEM5s94xvhVuPy4YVZsvLSErZAw8jsRc8312Lh54WSXeVunnWLp3nXDlCdZYf_Z994n0M0bmedHbJkW45y0m9ej-_oL9H56lvXXVUErQZ_uV372XLE7nFiuU43RAoTdslYLMsMPHKbUG_dA2d2uMTicNXQ7clMfeanRZvkPuqVI1ou-BhDdo7gJ-GypNe46Nbjc7fij5FbxF0WeTR_HkQQlVMq2seTTufGP8pdy-c32QRX8a0Pxpkhl_Jmm79FZANg2bQIAXTejFBLryWoeBzuKua7usSY7OcObnpKPjwj_EyTWtDoRU27n6kgxCkXJ6lmE3Z9yO4OFoVg2MOarJo_ZzTxnGzlqLSEcnmYAYOtEaj9UaK16qPMzlqzMQ=w1756-h1592-no?authuser=0)

## Component Hierarchy

![imageAlt](https://lh3.googleusercontent.com/CU-lDtArzATJdANDUNHi9AKI50xga-1o78D_gDduwUc19eHWhJSFSxrbFIKYVaHWJB4AIslZLRUN7lb-Rc4WTRvt4yo0pl_0ltx9Kuyx-O4KHeGIfOCC_GOlE62jZ7heZ5Sg56l_Zf5rTo0GW3Nw0R-JFKrMn5BSWeyrPZsVkM93up1Mv_XkP87wofHwyV6B37eBSa1RAaQSzF6fvDyIf01S11ZAqwKgu2IVLBKOGnAwX65-PBXEQILfniqs4gokE53vXgST4dc8c44uh1NaIZLc0JsMTG60bTdom8yeqHUKRdgeoTKc7KRhlnnzCawz9O2Vi6QeMGrQWGACNxXvNKG16PtMJA4jeukAIy4yj5VmBo4uTcm34KhuopNCzEjD-NDRJbhv2hzPo2dcB_J7exGFEw1krEoGZu5QXGDN15r_ApK-Cl_Cx-ly7R8SwLwmM1zRvgWPjzv3OxB0er46PuimDwcnxFlQRtFVi4wnRyLRyNPWU-v3XHOlr9Pf0oC_jP8EqIJqLQHV67yvKc2QgLzqgpaBua4omAmsH64K0QPI_QTfTe66TTkuGfHElEbdf5qiFDgUsmrZPZC6zkyUO69J2T6w2dTyeZIwuRtaOfi1e85FzVZaL6myfv8EKBl_apqmPeSmd4aeAJEy5yRt1vLdIsQMudSuL6L1jDTvGVSysc5kfcWh4JNIMZi2L4KbvQ10Gr0jky2vRKcu06ge1A=w327-h315-no?authuser=0)

## API and Data Sample

https://airtable.com/appwSNnRvlbsz27yj

Airtable is returning the data for this base as follows:

```
{
    "records": [
        {
            "id": "recaeUa2Cm9NmUdF6",
            "fields": {
                "id": "aBc12@",
                "balance": 0,
                "chips": 10
            },
            "createdTime": "2021-08-19T19:43:00.000Z"
        }
    ]
}

```

#### MVP

- App as a container component.
- Home component will contain a form to create a wallet and POST it to the API.
- If user already has a wallet key, GET wallet from API.
- In wallet component, mine for coins by clicking on coin button with a save function and POST changes to wallet balance to API.
- Navigation will have two components. About and Contact


#### PostMVP

- Check for robots
- Coin transfers

## Project Schedule

| Day      | Deliverable                                      | Status   |
| -------- | ------------------------------------------------ | -------- |
| Aug 20   | Project approval                                 | Complete |
| Aug 23   | Create and Route components for GET / POST wallet| Complete |
| Aug 24   | Create wallet component / clicking algo          | Complete |
| Aug 25   | CSS (attempt to bootstrap, else flexbox)         | Complete |

## SWOT Analysis

### Strengths:

I think that I have a good understanding of CSS and JavaScript. So hopefully I can get the algo for the number of chips and styling done quickly for MVP requirements

### Weaknesses:

Can implement toggle but don't fully understand it, same for prevstate.

### Opportunities:

This project will give me enough time to review documentation. Obtain a fundamental understanding of the concepts learned in class and fill knowledge gaps. I am also looking forward to post-mvp to get a chance to play with React.

### Threats:

Knowledge gaps and weaknesses mentioned above.
