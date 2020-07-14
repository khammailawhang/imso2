<template>
  <div>
      <v-container class="grey lighten-5">
    <v-row no-gutters id="print">
        <v-col cols="12" align="center">
         <p>ສາທາລະນະລັດ  ປະຊາທິປະໄຕ  ປະຊາຊົນລາວ<br>Lao  People's  Democratic  Republic<br>--- 000 ---</p>
      </v-col>

      <!-- Title -->
      <v-col cols="6">
        <p>ກະຊວງ ຄົມມະນາຄົມ ຂົນສົ່ງ ໄປສະນີ ແລະ ກໍ່ສ້າງ<br>MINISTRY OF C.T.P.C<br>ພະແນກ ຄຂປກ ປະຈຳແຂວງ ...<br>DEPARTMENT OF CTPC</p>
      </v-col>
      <v-col cols="6" align="right">
        ເລກທີ <span>19653</span> ຄຂປກ.
      </v-col>
      <v-col cols="12" align="center">
        ລາຍການກວດກາເທັກນິກ ພາຫະນະ<br>
        MONITOR VEHICLE TECHNICAL INSPECTION RECORD
      </v-col>

      <!-- Section one -->
      <v-col cols="3" align="left">ຊື່ເຈົ້າຂອງລົດ: <b>ອຳຄາ ວິລະວົງ</b><br>(Name)</v-col>
        <v-col cols="2" align="left">ທີ່ຢູ່: <b>ວຽງຈັນ</b><br>(Address)</v-col>
        <v-col cols="2" align="left">ບ້ານ: <b>ທົ່ງກາງ</b><br>(Village)</v-col>
        <v-col cols="2" align="left">ເມືອງ: <b>ສີສັດຕະນາກ</b><br>(District)</v-col>
        <v-col cols="3" align="left">ເບີໂທລະສັບ: <b>020 5555 6789</b><br>(Telephone)</v-col>
        <v-col cols="3" align="left">ເລກທະບຽນລົດ: <b>...</b><br>(Platc No)</v-col>
        <v-col cols="3" align="left">ຍີ່ຫໍ້ <b>...</b><br>(Model)</v-col>
        <v-col cols="2" align="left">ປະເພດລົດ <b>...</b><br>(Type)</v-col>
        <v-col cols="2" align="left">ສີ <b>...</b><br>(Color)</v-col>
        <v-col cols="2" align="left">ພວງມມະໄລ <b>...</b><br>(Steering Wheel)</v-col>
        <v-col cols="3" align="left">ໃຊ້ນຳ້ມັນ <b>...</b><br>(Fuel)</v-col>
        <v-col cols="3" align="left">ຈຳນວນສູບ <b>...</b><br>(Cylinder)</v-col>
        <v-col cols="5" align="left">ຄວາມແຮງ <b>...</b><br>(Cylinder Size CC) </v-col>
        <v-col cols="1" class="mb-0" align="center">ຊຊ<br>(CC)</v-col>
        <v-col cols="6" align="left">ເລກຈັກ <b>...</b><br>(Engine No)</v-col>
        <v-col cols="6" align="left">ເລກຖັງ <b>...</b><br>(Chassic No)</v-col>
        <v-col cols="2" align="left">ລວງກ້ວາງ<b>...</b><br>(Width)</v-col>
        <v-col cols="1" align="center">ມມ,<br>(mm),</v-col>
        <v-col cols="1" align="left">ລວງຍາວ<b>...</b><br>(Length)</v-col>
        <v-col cols="1" align="center">ມມ, <br>(mm),</v-col>
        <v-col cols="2" align="left">ລວງສູງ <b>...</b><br>(Height)</v-col>
        <v-col cols="1" align="center">ມມ<br>(mm),</v-col>
        <v-col cols="3" align="left">ຈຳນວນບ່ອນນັ່ງໂດຍສານ <b>...</b><br>(Passenger Scats)</v-col>
        <v-col cols="1" align="center">ບ່ອນນັ່ງ<br>(Scats)</v-col>
        <v-col cols="3" align="left">ນຳ້ໜັກລົດ <b>...</b><br>(Vehicle Weight)</v-col>
        <v-col cols="1" align="center">ກິໂລ<br>(Kg)</v-col>
        <v-col cols="3" align="left">ນຳ້ໜັກບັນທຸກ <b>...</b><br>(Max Loading)</v-col>
        <v-col cols="1" align="center">ກິໂລ<br>(Kg)</v-col>
        <v-col cols="3" align="left">ນຳ້ໜັກລວມ <b>...</b><br>(Total Weight)</v-col>
        <v-col cols="1" align="center">ກິໂລ<br>(Kg)</v-col>
        <v-col cols="5" align="right"></v-col>

      <!-- Section Two -->
      
      <v-col cols="11" class="py-10">
        <v-row no-gutters>
            <v-col cols="3">
                <v-row no-gutters><v-col cols="12"><b>1. ລະບົບສົ່ງທິດ: </b><br><small>(Streering Device)</small></v-col></v-row>
            </v-col>
            <v-col cols="3" align="left">
                <v-row no-gutters>
                    <v-col cols="2" align="left">
                        <v-btn class="ma-0" x-small tile outlined color="black" dark><v-icon small>mdi-check</v-icon></v-btn>
                    </v-col>
                    <v-col class="mb-0" cols="10" align="left">
                        <span> ພວງມະໄລ </span><br><small>(Handier)</small>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="3" align="left">
                <v-row no-gutters>
                    <v-col cols="2" align="left">
                        <v-btn class="ma-0" x-small tile outlined color="black" dark><v-icon small>mdi-check</v-icon></v-btn>
                    </v-col>
                    <v-col class="mb-0" cols="10" align="left">
                        <span> ຄັນສົ່ງ </span><br><small>(Am/Rod)</small>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="3" align="left">
                <v-row no-gutters>
                    <v-col cols="2" align="left">
                        <v-btn class="ma-0" x-small tile outlined color="black" dark><v-icon small>mdi-check</v-icon></v-btn>
                    </v-col>
                    <v-col class="mb-0" cols="10" align="left">
                        <span> ຕັ້ງລໍ້ </span><br><small>(Side Slip)</small>
                    </v-col>
                </v-row>
            </v-col>

            <v-col cols="3">
                <v-row no-gutters><v-col cols="12"><b>2. ລະບົບຫ້າມ: </b><br><small>(Braking Device)</small></v-col></v-row>
            </v-col>
            <v-col cols="3" align="left">
                <v-row no-gutters>
                    <v-col cols="2" align="left">
                        <v-btn class="ma-0" x-small tile outlined color="black" dark><v-icon small>mdi-check</v-icon></v-btn>
                    </v-col>
                    <v-col class="mb-0" cols="10" align="left">
                        <span> ຜາງຕີນ </span><br><small>(Pedal)</small>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="3" align="left">
                <v-row no-gutters>
                    <v-col cols="2" align="left">
                        <v-btn class="ma-0" x-small tile outlined color="black" dark><v-icon small>mdi-check</v-icon></v-btn>
                    </v-col>
                    <v-col class="mb-0" cols="10" align="left">
                        <span> ທໍ່ນໍ້າມັນເບກ </span><br><small>(Hose/Pipe)</small>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="3" align="left">
                <v-row no-gutters>
                    <v-col cols="2" align="left">
                        <v-btn class="ma-0" x-small tile outlined color="black" dark><v-icon small>mdi-check</v-icon></v-btn>
                    </v-col>
                    <v-col class="mb-0" cols="10" align="left">
                        <span> ເຕົ້ານໍ້າມັນເບກ </span><br><small>(Reservoir Tank)</small>
                    </v-col>
                </v-row>
            </v-col>

            <v-col cols="3">
                <v-row no-gutters><v-col cols="12"><b>3. ລະບົບຊັດທ່ຽງ (ສູນລໍ້): </b><br><small>(Punning Device)</small></v-col></v-row>
            </v-col>
            <v-col cols="3" align="left">
                <v-row no-gutters>
                    <v-col cols="2" align="left">
                        <v-btn class="ma-0" x-small tile outlined color="black" dark><v-icon small>mdi-check</v-icon></v-btn>
                    </v-col>
                    <v-col class="mb-0" cols="10" align="left">
                        <span> ລົມຢາງຕີນລົດ </span><br><small>(Tire)</small>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="3" align="left">
                <v-row no-gutters>
                    <v-col cols="2" align="left">
                        <v-btn class="ma-0" x-small tile outlined color="black" dark><v-icon small>mdi-check</v-icon></v-btn>
                    </v-col>
                    <v-col class="mb-0" cols="10" align="left">
                        <span> ຕີນລົດ </span><br><small>(Wheel)</small>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="3" align="left">
                <v-row no-gutters>
                    <v-col cols="2" align="left">
                        <v-btn class="ma-0" x-small tile outlined color="black" dark><v-icon small>mdi-check</v-icon></v-btn>
                    </v-col>
                    <v-col class="mb-0" cols="10" align="left">
                        <span> ນ໋ອດລໍ້ </span><br><small>(Bolt/Nut)</small>
                    </v-col>
                </v-row>
            </v-col>


            <v-col cols="3">
                <v-row no-gutters><v-col cols="12"><b>4. ລະບົບສັ່ນສະເທືອນ: </b><br><small>(Chock Absorber)</small></v-col></v-row>
            </v-col>
            <v-col cols="3" align="left">
                <v-row no-gutters>
                    <v-col cols="2" align="left">
                        <v-btn class="ma-0" x-small tile outlined color="black" dark><v-icon small>mdi-check</v-icon></v-btn>
                    </v-col>
                    <v-col class="mb-0" cols="10" align="left">
                        <span> ຊົກອັບ </span><br><small>(Chock Absorber)</small>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="3" align="left">
                <v-row no-gutters>
                    <v-col cols="2" align="left">
                        <v-btn class="ma-0" x-small tile outlined color="black" dark><v-icon small>mdi-check</v-icon></v-btn>
                    </v-col>
                    <v-col class="mb-0" cols="10" align="left">
                        <span> ໄສ້ເສືອ </span><br><small>(Spring)</small>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="3"></v-col>


            <v-col cols="2">
                <v-row no-gutters><v-col cols="12"><b>5. ລະບົບເຄື່ອງຈັກ: </b><br><small>(Prime Move)</small></v-col></v-row>
            </v-col>
            <v-col cols="2" align="left">
                <v-row no-gutters>
                    <v-col cols="3" align="left">
                        <v-btn class="ma-0" x-small tile outlined color="black" dark><v-icon small>mdi-check</v-icon></v-btn>
                    </v-col>
                    <v-col class="mb-0" cols="9" align="left">
                        <span> ກາຊວນ </span><small>(Diesel)</small>
                    </v-col>
                    
                    <v-col cols="3" align="left">
                        <v-btn class="ma-0" x-small tile outlined color="black" dark><v-icon small>mdi-check</v-icon></v-btn>
                    </v-col>
                    <v-col class="mb-0" cols="9" align="left">
                        <span> ແອັດຊັງ </span><small>(Gasoline)</small>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="2" align="left">
                <v-row no-gutters>
                    <v-col cols="3" align="left">
                        <v-btn class="ma-0" x-small tile outlined color="black" dark><v-icon small>mdi-check</v-icon></v-btn>
                    </v-col>
                    <v-col class="mb-0" cols="9" align="left">
                        <span> ສາຍພານ </span><br><small>(Wheel)</small>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="2" align="left">
                <v-row no-gutters>
                    <v-col cols="3" align="left">
                        <v-btn class="ma-0" x-small tile outlined color="black" dark><v-icon small>mdi-check</v-icon></v-btn>
                    </v-col>
                    <v-col class="mb-0" cols="9" align="left">
                        <span> ໝໍ້ນໍ້າ </span><br><small>(Bolt/Nut)</small>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="2" align="left">
                <v-row no-gutters>
                    <v-col cols="3" align="left">
                        <v-btn class="ma-0" x-small tile outlined color="black" dark><v-icon small>mdi-check</v-icon></v-btn>
                    </v-col>
                    <v-col class="mb-0" cols="9" align="left">
                        <span> ຄາບິວ </span><br><small>(Bolt/Nut)</small>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="2" align="left">
                <v-row no-gutters>
                    <v-col cols="3" align="left">
                        <v-btn class="ma-0" x-small tile outlined color="black" dark><v-icon small>mdi-check</v-icon></v-btn>
                    </v-col>
                    <v-col class="mb-0" cols="9" align="left">
                        <span> ປໍ້າຊີດ </span><br><small>(Bolt/Nut)</small>
                    </v-col>
                </v-row>
            </v-col>


            <v-col cols="4">
                <v-row no-gutters><v-col cols="12"><b>6. ກຳນົດການກະຈາຍຂອງອາຍເສັຍ, ຄັວນດຳ: </b><br><small>(Emission Limit)</small></v-col></v-row>
            </v-col>
            <v-col cols="3" align="left">
                <v-row no-gutters>
                    <v-col cols="2" align="left">
                        <v-btn class="ma-0" x-small tile outlined color="black" dark><v-icon small>mdi-check</v-icon></v-btn>
                    </v-col>
                    <v-col class="mb-0" cols="10" align="left">
                        <small> (CO) Carbon Monoxide  </small>
                    </v-col>
                    
                    <v-col cols="2" align="left">
                        <v-btn class="ma-0" x-small tile outlined color="black" dark><v-icon small>mdi-check</v-icon></v-btn>
                    </v-col>
                    <v-col class="mb-0" cols="10" align="left">
                        <small> (HC) Hydrocabons </small>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="5"></v-col>


            <v-col cols="3">
                <v-row no-gutters><v-col cols="12"><b>7. ລະບົບກົນໄກປ່ຽນຄວາມແຮງ: </b><br><small>(Power Transmission)</small></v-col></v-row>
            </v-col>
            <v-col cols="3" align="left">
                <v-row no-gutters>
                    <v-col cols="2" align="left">
                        <v-btn class="ma-0" x-small tile outlined color="black" dark><v-icon small>mdi-check</v-icon></v-btn>
                    </v-col>
                    <v-col class="mb-0" cols="10" align="left">
                        <span> ຈານຄາດ </span><br><small>(Clutch)</small>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="2" align="left">
                <v-row no-gutters>
                    <v-col cols="3" align="left">
                        <v-btn class="ma-0" x-small tile outlined color="black" dark><v-icon small>mdi-check</v-icon></v-btn>
                    </v-col>
                    <v-col class="mb-0" cols="9" align="left">
                        <span> ເກັຍ </span><br><small>Gear Lever</small>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="2" align="left">
                <v-row no-gutters>
                    <v-col cols="3" align="left">
                        <v-btn class="ma-0" x-small tile outlined color="black" dark><v-icon small>mdi-check</v-icon></v-btn>
                    </v-col>
                    <v-col class="mb-0" cols="9" align="left">
                        <span> ກາກດັ່ງ </span><br><small>(Drive Shaft)</small>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="2" align="left">
                <v-row no-gutters>
                    <v-col cols="3" align="left">
                        <v-btn class="ma-0" x-small tile outlined color="black" dark><v-icon small>mdi-check</v-icon></v-btn>
                    </v-col>
                    <v-col class="mb-0" cols="9" align="left">
                        <span> ກາກບາດ </span><br><small>(Universal Join)</small>
                    </v-col>
                </v-row>
            </v-col>

            <v-col cols="3">
                <v-row no-gutters><v-col cols="12"><b>8. ລະບົບເກັບສຽງ: </b><br><small>(Exhausting Device)</small></v-col></v-row>
            </v-col>
            <v-col cols="3" align="left">
                <v-row no-gutters>
                    <v-col cols="2" align="left">
                        <v-btn class="ma-0" x-small tile outlined color="black" dark><v-icon small>mdi-check</v-icon></v-btn>
                    </v-col>
                    <v-col class="mb-0" cols="10" align="left">
                        <span> ທໍ່ອາຍເສັຍ </span><br><small>(Muffler)</small>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="3" align="left">
                <v-row no-gutters>
                    <v-col cols="2" align="left">
                        <v-btn class="ma-0" x-small tile outlined color="black" dark><v-icon small>mdi-check</v-icon></v-btn>
                    </v-col>
                    <v-col class="mb-0" cols="10" align="left">
                        <span> ລະດັບສຽງ </span><br><small>(db)</small>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="3"></v-col>


            <v-col cols="2">
                <v-row no-gutters><v-col cols="12"><b>9. ລະບົບໄຟ: </b><br><small>(Electronic Device)</small></v-col></v-row>
            </v-col>
            <v-col cols="1" align="left">
                <v-row no-gutters>
                    <v-col cols="6" align="left">
                        <v-btn class="ma-0" x-small tile outlined color="black" dark><v-icon small>mdi-check</v-icon></v-btn>
                    </v-col>
                    <v-col class="mb-0" cols="6" align="left">
                        <span> ໝໍ້ໄຟ </span><br><small>(Batterry)</small>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="1" align="left">
                <v-row no-gutters>
                    <v-col cols="6" align="left">
                        <v-btn class="ma-0" x-small tile outlined color="black" dark><v-icon small>mdi-check</v-icon></v-btn>
                    </v-col>
                    <v-col class="mb-0" cols="6" align="left">
                        <span> ໄຟຕາ </span><br><small>(Light)</small>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="1" align="left">
                <v-row no-gutters>
                    <v-col cols="6" align="left">
                        <v-btn class="ma-0" x-small tile outlined color="black" dark><v-icon small>mdi-check</v-icon></v-btn>
                    </v-col>
                    <v-col class="mb-0" cols="6" align="left">
                        <span> ແກ </span><br><small>(Horn)</small>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="2" align="left">
                <v-row no-gutters>
                    <v-col cols="3" align="left">
                        <v-btn class="ma-0" x-small tile outlined color="black" dark><v-icon small>mdi-check</v-icon></v-btn>
                    </v-col>
                    <v-col class="mb-0" cols="9" align="left">
                        <span> ໄຟລ້ຽວ </span><br><small>(Indictor Light)</small>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="2" align="left">
                <v-row no-gutters>
                    <v-col cols="3" align="left">
                        <v-btn class="ma-0" x-small tile outlined color="black" dark><v-icon small>mdi-check</v-icon></v-btn>
                    </v-col>
                    <v-col class="mb-0" cols="9" align="left">
                        <span> ໄຟແບກ </span><br><small>(Brake Light)</small>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="1" align="left">
                <v-row no-gutters>
                    <v-col cols="6" align="left">
                        <v-btn class="ma-0" x-small tile outlined color="black" dark><v-icon small>mdi-check</v-icon></v-btn>
                    </v-col>
                    <v-col class="mb-0" cols="6" align="left">
                        <span> ໄຟຕາລີ </span><br><small>(Side Light)</small>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="2" align="left">
                <v-row no-gutters>
                    <v-col cols="3" align="left">
                        <v-btn class="ma-0" x-small tile outlined color="black" dark><v-icon small>mdi-check</v-icon></v-btn>
                    </v-col>
                    <v-col class="mb-0" cols="9" align="left">
                        <span> ໄຟຖອຍ </span><br><small>(Rear Light)</small>
                    </v-col>
                </v-row>
            </v-col>


            <v-col cols="3">
                <v-row no-gutters><v-col cols="12"><b>10. ລະບົບກວດກາຄວາມຟອດໄພ: </b><br><small>(Safety)</small></v-col></v-row>
            </v-col>
            <v-col cols="3" align="left">
                <v-row no-gutters>
                    <v-col cols="2" align="left">
                        <v-btn class="ma-0" x-small tile outlined color="black" dark><v-icon small>mdi-check</v-icon></v-btn>
                    </v-col>
                    <v-col class="mb-0" cols="10" align="left">
                        <span> ແວ່ນສ່ອງຫລັງ, ແວ່ນຂ້າງ </span><br><small>(Mirror)</small>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="3" align="left">
                <v-row no-gutters>
                    <v-col cols="2" align="left">
                        <v-btn class="ma-0" x-small tile outlined color="black" dark><v-icon small>mdi-check</v-icon></v-btn>
                    </v-col>
                    <v-col class="mb-0" cols="10" align="left">
                        <span> ຝອຍປັດນໍ້າຝົນ </span><br><small>(Wiper)</small>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="3"></v-col>


        </v-row>
      </v-col>
      <v-col cols="1" class="py-10">
          <v-row no-gutters>
                <v-col cols="12" align="right">
                    <v-btn class="ma-0" x-small tile outlined color="black" dark><v-icon small>mdi-check</v-icon></v-btn>
                </v-col>
                <v-col cols="12" align="right">
                    <v-btn class="ma-0" x-small tile outlined color="black" dark><v-icon small>mdi-check</v-icon></v-btn>
                </v-col>
                <v-col cols="12" align="right">
                    <v-btn class="ma-0" x-small tile outlined color="black" dark><v-icon small>mdi-check</v-icon></v-btn>
                </v-col>
                <v-col cols="12" align="right">
                    <v-btn class="ma-0" x-small tile outlined color="black" dark><v-icon small>mdi-check</v-icon></v-btn>
                </v-col>
                <v-col cols="12" align="right">
                    <v-btn class="ma-0" x-small tile outlined color="black" dark><v-icon small>mdi-check</v-icon></v-btn>
                </v-col>
                <v-col cols="12" align="right">
                    <v-btn class="ma-0" x-small tile outlined color="black" dark><v-icon small>mdi-check</v-icon></v-btn>
                </v-col>
                <v-col cols="12" align="right">
                    <v-btn class="ma-0" x-small tile outlined color="black" dark><v-icon small>mdi-check</v-icon></v-btn>
                </v-col>
                <v-col cols="12" align="right">
                    <v-btn class="ma-0" x-small tile outlined color="black" dark><v-icon small>mdi-check</v-icon></v-btn>
                </v-col>
                <v-col cols="12" align="right">
                    <v-btn class="ma-0" x-small tile outlined color="black" dark><v-icon small>mdi-check</v-icon></v-btn>
                </v-col>
                <v-col cols="12" align="right">
                    <v-btn class="ma-0" x-small tile outlined color="black" dark><v-icon small>mdi-check</v-icon></v-btn>
                </v-col>
                

                
                
          </v-row>
      </v-col>
      <v-col cols="12">
          <v-row no-gutters>
            <v-col cols="12" md="3">
                    <b>ໝາຍເຫດ:</b>
                </v-col>
                <v-col cols="12" md="3">
                    ເຄື່ອງໝາຍຜ່ານ:
                    <v-btn class="ma-0" x-small tile outlined color="black" dark><v-icon small>mdi-check</v-icon></v-btn>
                    <br><p>(Pass)</p>
                </v-col>
                <v-col cols="12" md="3">
                    ບໍ່ຜ່ານ:
                    <v-btn class="ma-0" x-small tile outlined color="red" dark><v-icon small>mdi-close</v-icon></v-btn>
                    <br>(Failed)
                </v-col>
                <v-col cols="12" md="3"></v-col>
                <v-col cols="12" md="3"></v-col>
                <v-col cols="12" md="9">
                    <p>- ຖ້າລະບົບໃດໜຶ່ງບໍ່ຜ່ານ ແມ່ນເອົາໄປສ້ອມແປງຄີນແລ້ວ ເອົາມາກວດໃໝ່.</p>
                    <p>- if some system failed, it must be to repaired then inspect that system again.</p>
                </v-col>
                <v-col cols="12">
                    <v-row no-gutters>
                        <v-col cols="9"></v-col>
                        <v-col cols="3" align="left"><b>ວັນທີ</b><br><b>Date</b></v-col>
                        <v-col cols="4" align="center">
                                <h3>ຜູ້ກວດກາຕົວຈິງ</h3>
                                (Inspector)
                            </v-col>
                            <v-col cols="4" align="center">
                                <h3>ບ່ອນກວດກາສະພາບເທັກນິກ</h3>
                                (Technical Inspection)
                            </v-col>
                            <v-col cols="4" align="center">
                                <h4>ຫົວໜ້າກອງຄຸ້ມຄອງພາຫະນະ</h4>
                                <h4>(Chief of vehicle management division)</h4>
                            </v-col>
                    </v-row>
                </v-col>
                

            
        </v-row>
      </v-col>

    </v-row>
    <v-row>
         <v-col cols="12" align="center">
                <v-btn text color="blue" @click="print">Print</v-btn>
        </v-col>
    </v-row>
  </v-container>
  </div>
</template>
<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Print from 'vue-print-nb'

Vue.use(Print);
Vue.use(VueAxios, axios)

import VueHtmlToPaper from 'vue-html-to-paper';
 
const options = {
  name: '_blank',
  specs: [
    'fullscreen=yes',
    'titlebar=yes',
    'scrollbars=yes'
  ]
}
 
Vue.use(VueHtmlToPaper, options);
Vue.use(VueHtmlToPaper);

export default {
    data :() =>({
        disabled:false,
        inspections:[],
    }),
    mounted(){
        this.getAllData();
    },
    methods:{
        print() {
            this.$htmlToPaper('print');
        },
        getAllData(){
            axios.get('/api/inspection').then(response => {
                this.inspections = response.data.inspections
            })
        }
    }
}
</script>