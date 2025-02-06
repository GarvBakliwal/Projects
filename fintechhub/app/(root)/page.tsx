import HeaderBox from '@/components/HeaderBox'
import RightSide from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react'

const Home = () => {
  const loggedIn = { firstName: 'Garv', lastName: 'Bakliwal', email:'garv@bakliwal.com' };
  return (
    <section className='home' >
      <div className="home-content">
        <header className='home-header'>
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your Account and Transactions efficiently."
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={5720.04}
          />
        </header>

        RECENT TRANSACTIONS
      </div>
      <RightSide
        user={loggedIn}
        transactions={[]}
        banks={[{currentBalance:123.50},{currentBalance:321.05}]}
      />
    </section>
  )
}

export default Home