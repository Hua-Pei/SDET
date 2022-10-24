import Main_Page from './page.cy'

const test = new Main_Page()

describe('before each test', function(){
  beforeEach(() =>{
    test.visit()
  })

  

  /*
  it('valid time', function(){
    test.Starting_Date("10/19/2022")
    test.Leaving_Date("10/20/2022")

    test.Starting_Time("3:00")
    test.Leaving_Time("3:00")

    test.Starting_AMPM("PM")
    test.Leaving_AMPM("PM")

    test.Calculate()

    test.success()
  })

  it('only have entry time/date', function(){
    test.Starting_Date("10/19/2022")

    test.Starting_Time("3:00")
  

    test.Starting_AMPM("PM")

    test.Calculate()

    test.Error_NoDate()
  })

  it('only have leaving time/date', function(){
    test.Leaving_Date("10/20/2022")

    test.Leaving_Time("3:00")

    test.Leaving_AMPM("PM")

    test.Calculate()

    test.Error_NoDate()
  })

  it('leaving date earlier than starting date', function(){
    test.Starting_Date("10/19/2022")
    test.Leaving_Date("10/18/2022")

    test.Starting_Time("3:00")
    test.Leaving_Time("3:00")

    test.Starting_AMPM("PM")
    test.Leaving_AMPM("PM")

    test.Calculate()

    test.Error_DateDiff()
  })

  it('same date but leave time earlier than starting time', function(){
    test.Starting_Date("10/19/2022")
    test.Leaving_Date("10/19/2022")

    test.Starting_Time("3:00")
    test.Leaving_Time("2:55")

    test.Starting_AMPM("PM")
    test.Leaving_AMPM("PM")

    test.Calculate()

    test.Error_TimeDiff()
  })
  

  it('Valet Parking whole day', function(){
    test.ParkingLot('Valet Parking')
    test.Starting_Date("10/19/2022")
    test.Leaving_Date("10/19/2022")

    test.Starting_Time("0:00")
    test.Leaving_Time("24:00")

    test.Starting_AMPM("AM")
    test.Leaving_AMPM("AM")

    test.Calculate()

    test.price(18)
  })


  it('Short term parking whole day', function(){
    test.ParkingLot('Short-Term Parking')
    test.Starting_Date("10/19/2022")
    test.Leaving_Date("10/19/2022")

    test.Starting_Time("0:00")
    test.Leaving_Time("24:00")

    test.Starting_AMPM("AM")
    test.Leaving_AMPM("AM")

    test.Calculate()

    test.price(24)
  })


  it('Long term garage parking whole day', function(){
    test.ParkingLot('Long-Term Garage Parking')
    test.Starting_Date("10/19/2022")
    test.Leaving_Date("10/19/2022")

    test.Starting_Time("0:00")
    test.Leaving_Time("24:00")

    test.Starting_AMPM("AM")
    test.Leaving_AMPM("AM")

    test.Calculate()

    test.price(12)
  })


  it('Long term surface parking whole day', function(){
    test.ParkingLot('Long-Term Surface Parking')
    test.Starting_Date("10/19/2022")
    test.Leaving_Date("10/19/2022")

    test.Starting_Time("0:00")
    test.Leaving_Time("24:00")

    test.Starting_AMPM("AM")
    test.Leaving_AMPM("AM")

    test.Calculate()

    test.price(10)
  })


  it('Economy lot parking whole day', function(){
    test.ParkingLot('Economy Parking')
    test.Starting_Date("10/19/2022")
    test.Leaving_Date("10/19/2022")

    test.Starting_Time("0:00")
    test.Leaving_Time("24:00")

    test.Starting_AMPM("AM")
    test.Leaving_AMPM("AM")

    test.Calculate()

    test.price(9)
  })
*/

  it('Valet Parking less than 5 hours', function(){
    test.ParkingLot('Valet Parking')
    test.Starting_Date("10/19/2022")
    test.Leaving_Date("10/19/2022")

    test.Starting_Time("8:00")
    test.Leaving_Time("12:00")

    test.Starting_AMPM("AM")
    test.Leaving_AMPM("PM")

    test.Calculate()

    test.price(12)
  })
})