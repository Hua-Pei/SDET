class Main_Page{
  visit(){
    cy.visit('https://www.shino.de/parkcalc/')
  }


  // Have the user select their own parking
  ParkingLot(value){
    cy.get('[name="ParkingLot"]').select(value)
  }


  //individual parking
  Valet_Parking(){
    cy.get('[name="ParkingLot"]').select('Valet Parking')
  }

  Economy_Parking(){
    cy.get('[name="ParkingLot"]').select('Economy Parking')
  }

  Short_Term(){
    cy.get('[name="ParkingLot"]').select('Short-Term Parking')
  }

  //Starting
  //starting date
  Starting_Date(value){
    cy.get('[name="StartingDate"]').clear()
    cy.get('[name="StartingDate"]').type(value)
  }
  //starting time
  Starting_Time(value){
    cy.get('[name="StartingTime"]').clear()
    cy.get('[name="StartingTime"]').type(value)
  }
  //AM/PM
  Starting_AMPM(value){
    cy.get('[name="StartingTimeAMPM"]').check(value)
  }

  //Leaving
  //Leaving date
  Leaving_Date(value){
    cy.get('[name="LeavingDate"]').clear()
    cy.get('[name="LeavingDate"]').type(value)
  }
  //Leaving time
  Leaving_Time(value){
    cy.get('[name="LeavingTime"]').clear()
    cy.get('[name="LeavingTime"]').type(value)
  }
  //AM/PM
  Leaving_AMPM(value){
    cy.get('[name="LeavingTimeAMPM"]').check(value)
  }

  Calculate(){
    cy.get('[name="Submit"]').click()
  }

  Error_NoDate(){
    //cy.get('.SubHead').contains("ENTER A CORRECTLY FORMATTED DATE")
    cy.get('.SubHead').contains("ERROR! Enter A Correctly Formatted Date")
  }
  
  Error_DateDiff(){
    cy.get('.SubHead').contains("ERROR! Your Leaving Date Or Time Is Before Your Starting Date or Time")
  }
  
  Error_TimeDiff(){
    cy.get('.SubHead').contains("$ 0.00")
    cy.get('.BodyCopy').contains("(-")
  }

  success(){
    cy.get('.SubHead').should("not.contain", "$ 0.00")
  }

  price(value){
    cy.get('.Subhead').contains(value)
  }
}

export default Main_Page