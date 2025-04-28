import { useState, useEffect } from "react";
import Header from "./components/Header";
import Contacts from "./components/Contacts";
import ContactList from "./components/ContactList";
import { v4 } from "uuid";

function App() {
  const [chart, setChart] = useState(null);

  const [contact, setContact] = useState({
    id: "",
    name: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const [editingId, setEditingId] = useState(null); // ID مخاط

  const [contacts, setContacts] = useState([]);
  const [allContacts, setAllContacts] = useState([]);

  const [alert, setAlert] = useState(false);

  const deleteHandler = (id) => {
    const newContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(newContacts);
  };

  // تابع برای شروع ویرایش
  const startEditing = (contact) => {
    setContact(contact);
    setEditingId(contact.id);
    setChart(true); // نمایش فرم
  };

  const saveContact = () => {
    // اعتبارسنجی فیلدها
    if (
      !contact.name?.trim() ||
      !contact.lastName?.trim() ||
      !contact.email?.trim() ||
      !contact.phone?.trim()
    ) {
      setAlert("Please enter valid data!");
      return;
    }

    if (
      contact.name.length < 3 ||
      contact.lastName.length < 3 ||
      /\d/.test(contact.name) ||
      /\d/.test(contact.lastName)
    ) {
      setAlert("Name or Last name is not correct");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(contact.email)) {
      setAlert("فرمت ایمیل وارد شده معتبر نیست!");
      return;
    }

    const phoneRegex = /^09\d{9}$/;
    if (!phoneRegex.test(contact.phone)) {
      setAlert("phone is not correct");
      return;
    }

    // تعیین پیام تأیید بر اساس حالت
    const confirmationMessage = editingId
      ? "آیا مطمئن هستید که می‌خواهید تغییرات را ذخیره کنید؟"
      : "آیا می‌خواهید مخاطب جدید اضافه کنید؟";

    // نمایش دیالوگ تأیید
    if (!window.confirm(confirmationMessage)) {
      return; // اگر کاربر انصراف داد
    }

    setAlert(""); // ریست alert در هر حالت

    if (editingId) {
      // حالت ویرایش
      setContacts(
        contacts.map((c) =>
          c.id === editingId ? { ...contact, id: editingId } : c
        )
      );
      window.alert("تغییرات با موفقیت اعمال شد!");
    } else {
      // حالت افزودن جدید
      const newContact = { ...contact, id: v4() };
      setContacts([...contacts, newContact]); // اصلاح این خط
      window.alert("مخاطب جدید با موفقیت اضافه شد!");
    }

    // ریست فرم
    setContact({ name: "", lastName: "", email: "", phone: "" });
    setEditingId(null);
    setChart(null);
  };

  // useEffect(() => {
  //   // فرضی: fetch یا هرچی
  //   setContacts(fetchedContacts);
  //   setOriginalContacts(fetchedContacts);
  // }, []);
  
  const searchHandler = (event) => {
    const searchValue = event.target.value.toLowerCase().trim();
  
    if (searchValue === "") {
      // اگر خالی بود، کل مخاطبین اصلی رو نمایش بده
      setAllContacts(allContacts);
    } else {
      // اگر چیزی نوشته شده بود، فیلتر کن
      const filteredContacts = allContacts.filter((contact) =>
        contact.name.toLowerCase().includes(searchValue)
      );
      setContacts(filteredContacts);
    }
  };

  return (
    <>
      <Header setChart={setChart} searchHandler={searchHandler} />

      {!!chart && (
        <Contacts
          chart={chart}
          setChart={setChart}
          contacts={contacts}
          setContacts={setContacts}
          contact={contact}
          setContact={setContact}
          onSave={saveContact} // تغییر نام از addHandler به onSave
          isEditing={!!editingId} // برای نمایش عنوان متفاوت در فرم
          alert={alert}
        />
      )}

      <ContactList
        contacts={contacts}
        deleteHandler={deleteHandler}
        startEditing={startEditing} // پاس دادن تابع ویرایش
      />
    </>
  );
}

export default App;
