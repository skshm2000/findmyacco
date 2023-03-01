import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Heading,
    Box,
    Stack
  } from '@chakra-ui/react'

export const FAQs = () => {
  return (
    <>
    <Stack
    w={{
      base: '80%',
      sm: '80%',
      md: '80%',
      lg: '60%',
      xl: '60%',
      '2xl': '60%',
    }}
    m='auto'
    mt='100px'
    spacing={'70px'}
    >
      <Heading textAlign={'center'}>Frequently Asked Questions</Heading>
    <Accordion defaultIndex={[0]} allowMultiple>
      <AccordionItem>
        <h2>
          <AccordionButton my='10px' bgColor={'#f4f6f8'}>
            <Box as="span" flex='1' textAlign='left' >
            1. Till when can I register for the scholarship?
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
        Applications for the scholarship are open until further notice so you can apply accordingly.
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton my='10px' bgColor={'#f4f6f8'}>
            <Box as="span" flex='1' textAlign='left'>
            2. When will the winners for the scholarship be known?
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
        Winners for the scholarship will be made known post March 2023.
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <h2>
          <AccordionButton my='10px' bgColor={'#f4f6f8'}>
            <Box as="span" flex='1' textAlign='left'>
            3. Which parameters will be taken into consideration?
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
        Applicants will be considered on the basis of their creativity and idea execution.
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <h2>
          <AccordionButton my='10px' bgColor={'#f4f6f8'}>
            <Box as="span" flex='1' textAlign='left'>
            4. Is there any eligibility criteria?
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
        The scholarship is only accessible to students who’re pursuing their education from the UK.
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <h2>
          <AccordionButton my='10px' bgColor={'#f4f6f8'}>
            <Box as="span" flex='1' textAlign='left'>
            5. Is there anything we require from your end?
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
        We require you to provide us with your acceptance letter and your passport details along with your former mark sheets and degree (if any).
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
    </Stack>
    </>
  )
}
