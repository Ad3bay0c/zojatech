
import { Typography, Divider, Input, Button } from 'antd'


const DashboardContent = () => {
  const { Title } = Typography

  return (
    <div
      style={{
        background: ``,
      }}
    >
      <div
        style={{
          margin: `70px 32px 25px 41px`,
        }}
      >
        <Title
          level={5}
          style={{
            marginTop: '0',
            fontStyle: `normal`,
            fontWeight: `500`,
            fontSize: `22px`,
            lineHeight: `26px`,
            color: `rgba(36, 46, 62, 0.5)`,
            height: `26px`,
            width: `176px`,
            marginBottom: `25px`,
          }}
        >
          System Settings
        </Title>
        <Title
          level={5}
          style={{
            marginTop: '0',
            fontStyle: `normal`,
            fontWeight: `400`,
            fontSize: `16px`,
            lineHeight: `16px`,
            color: `#6B51DF`,
            height: `16px`,
            width: `176px`,
            marginBottom: `12px`,
          }}
        >
          Organaizational Profile
        </Title>
        <Divider style={{ margin: 0 }} />

        <div className='company-card' style={{}}>
          <div>
            <Logo />
          </div>

          <div className='organisation-name'>
            <label>Organization Name</label>
            <Input placeholder='IT Horizons Ltd' />
          </div>
        </div>
        <Divider style={{ margin: 0 }} />
        <div className='organisation-vision'>
          <label className='h5'>Organaizational Vision</label>
          <br />

          <label>Vision</label>
          <br />
          <Input placeholder='To be the preferred technology partner by 2015' />
        </div>
        <Divider style={{ margin: 0 }} />

        <div className='organization-address'>
          <Title className='h5' level={5}>
            Organaizational Address
          </Title>

          <label>Street</label>
          <br />
          <Input placeholder='To be the preferred technology partner by 2015' />
          <br />
          <div className='contact-section'>
            <div className='contact'>
              <label>City</label>
              <select name='cars' id='cars'>
                <option value='volvo'>Lagos</option>
                <option value='saab'>Saab</option>
                <option value='mercedes'>Mercedes</option>
                <option value='audi'>Audi</option>
              </select>
              {/* <Select
              className='select'
              style={{ height: 56 }}
              defaultValue='lagos'
              placeholder='Lagos'
            >
              <Option value='Abuja'>Abuja</Option>
              <Option value='Rivers'>Rivers</Option>
              <Option value='Benin'>Benin</Option>
            </Select> */}
            </div>

            <div className='contact'>
              <label>State</label>
              <select name='cars' id='cars'>
                <option value='volvo'>Lagos</option>
                <option value='saab'>Enugu</option>
                <option value='mercedes'>Benin</option>
                <option value='audi'>Ibadan</option>
              </select>
            </div>

            <div className='contact'>
              <label>Country</label>
              <select name='cars' id='cars'>
                <option value='volvo'>Nigeria</option>
                <option value='saab'>Ghana</option>
                <option value='mercedes'>Senegal</option>
                <option value='audi'>Togo</option>
              </select>
            </div>
          </div>
        </div>

        <Divider style={{ margin: 0 }} />
        <br />
        <Button
          style={{
            backgroundColor: '#6B51DF',
            color: 'white',
            width: '138px',
            height: '56px',
            fontSize: '20px',
            borderRadius: '10px',
          }}
        >
          Save
        </Button>
      </div>
    </div>
  )
}

export default DashboardContent

const Logo = () => {
  return (
    <svg
      className='img-section'
      width='158'
      height='157'
      viewBox='0 0 158 157'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      xlink='http://www.w3.org/1999/xlink'
    >
      <rect
        x='0.359131'
        y='0.34446'
        width='157.282'
        height='156.311'
        fill='url(#pattern0)'
      />
      <defs>
        <pattern
          id='pattern0'
          patternContentUnits='objectBoundingBox'
          width='1'
          height='1'
        >
          <use
            href='#image0_1_511'
            transform='translate(0 -0.00310558) scale(0.005)'
          />
        </pattern>
        <image
          id='image0_1_511'
          width='200'
          height='200'
          href='data:image/png;base64,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'
        />
      </defs>
    </svg>
  )
}
