var poopy
module.exports = {
    beforEach: browser => {
        poopy = browser.page.automationBasics()
        poopy.navigate()
    },
    after: browser => {
        poopy.end()
    },
    'Even and Odds': browser => {
        poopy
            .setValue('@eInput', '1,2,3,4,5,6,7,8,9,0')
            .click('@eButton')
            .expect.element('@even').to.contain.text('2')
        poopy
            .expect.element('@odd').to.contain.text('1')
    },
    'Not even and odds': browser =>{
        poopy
            .clearValue('@eInput')
            .setValue('@eInput', '!@##!$@#%%^')
            .click('@eButton')
            .verify.containsText('@odd','null')
            // .pause()
    },
    'Filter objects': browser => {
        poopy
            .setValue('@fInput', 'name')
            .click('@fButton')
            .verify.containsText('@fOutput', 'Jimmy Joe')
    },
    'Filter string': browser => {
        poopy
            .setValue('@fsInput', 'James')
            .click('@fsButton')
            .verify.containsText('@fsOutput', 'James')
    },
    'Palindrome': browser => {
        poopy
            .setValue('@pInput', 'racecar')
            .click('@pButton')
            .verify.containsText('@pOutput', 'Palindrome: true')
    },
    'Not plaindrome': browser =>{
        poopy
            .clearValue('@pInput')
            .setValue('@pInput', 'hoopdie')
            .click('@pButton')
            .verify.containsText('@pOutput','false')
    },
    'sum': browser => {
        poopy
            .setValue('@sInput1', '2')
            .setValue('@sInput2', '2')
            .click('@sButton')
            .verify.containsText('@sOutput', '4')
    },
    'Incorrect sum': browser =>{
        // poopy
        // .setValue('@sInput1', '2')
        // .setValue('@sInput2', '2')
        // .click('@sButton')
        // .verify.containsText('@sOutput', '4')
    }
}